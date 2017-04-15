/* eslint-disable no-console */
import fs from 'fs-extra';
import readline from 'readline';
import { execSync } from 'child_process';

const OUTPUT_DIR_NAME = 'jakal-deploy-distribution';
const OUTPUT_PATH = `./${OUTPUT_DIR_NAME}`;
const ASSETS_PATH = './web/jakal/assets';
const DIST_PATH = './dist';
const INDEX_HTML_PATH = './web/jakal/index.html';


function fetchScriptTags(scriptDirectory) {
  const scriptFiles = fs.readdirSync(scriptDirectory);

  const scriptTags = scriptFiles.map(f => `<script src="/jakal/dist/${f}"></script>`);
  return scriptTags;
}

function createInjectedContainerString(path, scriptTags) {
  const INJECT_START = /##\[SCRIPT_PATHS_BEGIN\]##/;
  const INJECT_END = /##\[SCRIPT_PATHS_END\]##/;

  const content = fs.readFileSync(path, 'utf8');
  const contentWithInjecs = [];
  let isInjectArea = false;
  content.split('\n').forEach((l) => {
    if (INJECT_START.test(l)) {
      isInjectArea = true;
      scriptTags.forEach(t => contentWithInjecs.push(t));
    } else if (INJECT_END.test(l)) {
      isInjectArea = false;
    } else if (isInjectArea === false) {
      contentWithInjecs.push(l);
    }
  });

  return contentWithInjecs.join('\n');
}

function createScriptContainer(name, content, outputDir) {
  const fileName = `${outputDir}/${name}`;
  fs.writeFileSync(fileName, content);

  return fileName;
}

function deployWtihSCP(dirFrom, dirTo) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Hostname for deployment? ', (hostname) => {
    rl.question('Username? ', (username) => {
      const scpCmd = `scp -r ${dirFrom} ${username}@${hostname}:${dirTo}`;

      rl.question(`Execute \`${scpCmd}\`: y/n `, (answer) => {
        if (/y/.test(answer) === true) {
          execSync(scpCmd, (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
            }

            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
          });
        }
        rl.close();
      });
    });
  });
}

console.log('=============== CREATING DISTRIBUTION ===============');
fs.emptyDirSync(OUTPUT_PATH);

console.log('# injecting script tags');
const sTags = fetchScriptTags(DIST_PATH);
const injectedScriptContainerStr = createInjectedContainerString(INDEX_HTML_PATH, sTags);
createScriptContainer('index.html', injectedScriptContainerStr, OUTPUT_PATH);

console.log('# copying assets');
fs.copySync(ASSETS_PATH, `${OUTPUT_PATH}/assets`);

console.log('# copying dist');
fs.copySync(DIST_PATH, `${OUTPUT_PATH}/dist`);
console.log(`# created ${OUTPUT_PATH}`);

console.log('========================= DONE ======================\n');
deployWtihSCP(OUTPUT_PATH, '/tmp');
