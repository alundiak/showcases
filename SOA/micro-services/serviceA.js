const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const eventBus = require('./eventBus');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/getAData', (req, res) => {
  const data = req.body;
  console.log('Service A req.body', data);

  // Simulate getting data from ServiceA
  const responseData = { service: 'ServiceA', message: 'Data from ServiceA' };
  // eventBus.emit('dataReceived', { service: 'ServiceA', data });
  eventBus.emit('dataReceived', responseData);

  // res.send('Data received by ServiceA');
  res.json(responseData);
});

app.listen(3001, () => {
  console.log('ServiceA listening on port 3001');
});
