/* eslint-disable no-console */
const express = require('express'); //eslint-disable-line
const httpRequest = require('request'); //eslint-disable-line
const path = require('path');

const app = express();
const PORT = 8081;

const API = 'http://localhost:8080';
const ASSETS_PATH = path.join(__dirname, '/web/assets');
const INDEX_PATH = path.join(__dirname, '/web/index.html');

app.use('/assets', express.static(ASSETS_PATH));

app.use('/api/v1', (req, res) => {
  const apiUrl = `${API}${req.originalUrl}`;
  console.log(`Api call redirected to : ${apiUrl}`);

  // TODO: sets some headers
  httpRequest(apiUrl).pipe(res);
});

app.get('/', (req, res) => {
  res.sendFile(INDEX_PATH);
});

app.listen(PORT, () => {
  console.log(`Time: ${new Date().toString()}`);
  console.log(`Starting server on port: ${PORT}`);
  console.log(`Go to http://localhost:${PORT} to view application.`);
  httpRequest(`${API}/ping`, err => {
    if (err) {
      throw new Error(`Could not ping api server: ${err}`);
    }
  });
});
/* eslint-enable no-console */
