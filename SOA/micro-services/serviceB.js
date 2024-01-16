const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const eventBus = require('./eventBus');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/getBData', (req, res) => {
  // Simulate getting data from ServiceB
  const responseData = { service: 'ServiceB', message: 'Data from ServiceB' };
  eventBus.emit('dataReceived', responseData);
  res.json(responseData);
});

app.listen(3002, () => {
  console.log('ServiceB listening on port 3002');
});
