const _ = require('lodash');
const app = require('./server-config.js');
const todos = require('./database/queries.js');

const port = process.env.PORT || 5000;

function createToDo(req, data) {
  const protocol = req.protocol, 
    host = req.get('host'), 
    id = data.id;

  return {
    title: data.title,
    order: data.order,
    completed: data.completed || false,
    url: `${protocol}://${host}/${id}`
  };
}

app.get('/', async (req, res) => {
  const allEntries = await todos.all();
  return res.send(allEntries.map( _.curry(createToDo)(req) ));
});

app.get('/:id', async (req, res) => {
  const todo = await todos.get(req.params.id);
  return res.send(todo);
});

app.post('/', async (req, res) => {
  const created = await todos.create(req.body.title, req.body.order);
  return res.send(createToDo(req, created));
});

app.patch('/:id', async (req, res) => {
  const patched = await todos.update(req.params.id, req.body);
  return res.send(createToDo(req, patched));
});

app.delete('/', async (req, res) => {
  const deletedEntries = await todos.clear();
  return res.send(deletedEntries.map( _.curry(createToDo)(req) ));
});

app.delete('/:id', async (req, res) => {
  const deleted = await todos.delete(req.params.id);
  return res.send(createToDo(req, deleted));
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