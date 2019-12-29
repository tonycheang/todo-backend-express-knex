require('dotenv').config()
const express = require('express');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/api/hello', (req, res) => {
  res.send({
    express: 'Hello From Express'
  });
});

app.post('/api/world', (req, res) => {
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

// const httpsOptions = {
  // key: fs.readFileSync('./localhost-ssl/server.key'),
  // cert: fs.readFileSync('./localhost-ssl/server.crt')
// }
// const server = https.createServer(httpsOptions, app);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;
