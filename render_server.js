const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const renderer = require('vue-server-renderer').createRenderer();

const ADDRESS = '127.0.0.1';
const PORT = 9009;

const app = express();
const server = http.Server(app);

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.end('React render server');
});

app.post('/render', (req, res) => {
  const body = req.body;
  // body.serializedProps
  const createApp = require(body.path);
  renderer.renderToString(createApp(body.serializedProps), (err, markup) => {
    if (err) {
      res.json({
        error: {
          type: err.constructor.name,
          message: err.message,
          stack: err.stack
        },
        markup: null
      });
    } else {
      res.json({
        error: null,
        markup,
      });
    }
  });
});

server.listen(PORT, ADDRESS, () => {
  console.log('React render server listening at http://' + ADDRESS + ':' + PORT);
});
