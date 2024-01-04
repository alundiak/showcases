// TBD
const express = require('express');
const bodyParser = require('body-parser');
const Database = require('./database');
const errorHandler = require('./middlewares/errorHandler');

const router = express.Router();

// Middleware to parse JSON in request body
router.use(bodyParser.json());

router.post('/real-order', async (req, res) => {
  const db = await Database.connect();
  const orderId = await Database.createOrder(db, req.body);
  await db.close();

  res.status(201).json({ orderId });
});

router.get('/real-orders', async (req, res) => {
  const db = await Database.connect();
  const orders = await Database.getOrders(db);
  await db.close();

  res.status(200).json(orders);
});

// We can call same middleware in the context of Routers API handlers at any place. It will simply attach to the dedicated middleware stack
// It's especially crucial if the dedicated file *.js is tested by dedicated *.test.js file
router.use(errorHandler);

module.exports = router;
