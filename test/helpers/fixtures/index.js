import fs from 'fs';

const files = fs.readdirSync(`${__dirname}/`);

export default files.reduce((a, filename) => {
  const match = /\.json$/;

  if (match.test(filename)) {
    const exportName = filename.replace(match, '');
    a[exportName] = require(`${__dirname}/${filename}`);
  }

  return a;
}, {});
