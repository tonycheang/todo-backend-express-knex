const app = require('./server-config.js');

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  console.log("root")
  res.send({
    express: 'Hello From Express'
  });
});

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

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;