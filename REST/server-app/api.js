const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorHandler');
const checkUserRole = require('./middlewares/checkUserRole');

const router = express.Router();

// Middleware to parse JSON in request body
router.use(bodyParser.json());

// Sample data for demonstration purposes
let orders = [
  { id: 1, items: [{ itemId: 101, name: 'Item A' }], status: 'pending', type: 'phones' },
  { id: 2, items: [{ itemId: 102, name: 'Item B' }], status: 'approved', type: 'tablets' },
];

// If below code would be in server.js then app.get(), app.post() , etc will also work for routing handlers setup.
router.get('/orders', (req, res) => {
  // Get all orders or Filter orders query `type` is provided
  const { type } = req.query;

  // By introducing conditional code it kinda breaks SRP rule from SOLID.
  // But if we try to extract (to /orders and /filter-orders) then we will break REST rule about consistency.
  const filteredOrders = type
    ? orders.filter(order => order.type === type)
    : orders;

  res.status(200).json(filteredOrders);
});

router.get('/orders/:orderId', (req, res) => {
  // Get a specific order by ID
  const orderId = parseInt(req.params.orderId);
  const order = orders.find(o => o.id === orderId);

  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404).json({ error: 'Order not found' });
  }
});

router.get('/orders/item/:itemId', (req, res) => {
  // Get orders containing a specific item by ID
  const itemId = parseInt(req.params.itemId);
  const filteredOrders = orders.filter(order => order.items.some(item => item.itemId === itemId));

  if (filteredOrders.length > 0) {
    res.status(200).json(filteredOrders);
  } else {
    res.status(404).json({ error: 'No orders found with the specified item' });
  }
});

router.post('/order', (req, res) => {
  const newOrder = req.body;
  res.status(201).json(newOrder);

  // emulate auto-increment
  newOrder.id = orders[orders.length - 1].id + 1;
  // emulate auto-increment

  // kinda redundant emulation
  orders.push(newOrder);
});

router.post('/orders/bulk-update', (req, res) => {
  // TBD
});

router.post('/order-advanced', (req, res) => {
  try {
    // Check for required headers
    if (!req.get('Content-Type') || req.get('Content-Type') !== 'application/json') {
      throw new Error('Malformed request: Missing or incorrect Content-Type header');
    }

    // Check for required parameters in the request body
    const { requiredField } = req.body;
    if (!requiredField) {
      throw new Error('Malformed request: Missing required field in the request body');
    }

    // Process the valid request
    // ...

    res.status(201).json({ message: 'Resource created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/create-user', (req, res) => {
  // simple example of using 409 
  const { username } = req.body;

  const isUsernameAlreadyTaken = () => { }; // TBD

  // Check if the username already exists
  if (isUsernameAlreadyTaken(username)) {
    return res.status(409).json({ error: 'Username already exists' });
  }

  // Proceed with creating the user if there is no conflict
  // ...

  res.status(201).json({ message: 'User created successfully' });
});

router.put('/order/:orderId', (req, res) => {
  // For PUT the request body should contain the complete updated order (otherwise missing values will be treated as `null`)
  const orderId = parseInt(req.params.orderId);
  const updatedOrder = req.body;

  // Find the index of the order with the given ID
  const orderIndex = orders.findIndex(o => o.id === orderId);

  const almostRealUpdatedUSerObject = {
    id: orderId,
    ...updatedOrder,
    status: updatedOrder.status || null,  // Set to null if missing
  };

  if (orderIndex !== -1) {
    // Order found, replace the entire order with the updated one
    orders[orderIndex] = almostRealUpdatedUSerObject;
    res.status(200).json(almostRealUpdatedUSerObject);

    // or if 'No Content' then:
    // res.status(204).send();
  } else {
    // Order not found
    res.status(404).json({ error: 'Order not found' });
  }
});

// To be more consistent it's kinda better to replace by "PATCH /orders/{orderId}/approve"
router.patch('/approve-order/:orderId', (req, res, next) => {
  // For PATCH is minimally enough to use some part of entity object, like `status`, `description`, `name`, etc.
  const orderId = parseInt(req.params.orderId);
  const order = orders.find(o => o.id === orderId);

  if (order) {
    order.status = 'approved';
    res.status(200).json(order);
  } else {
    res.status(404).json({ error: 'Order not found' });
  }
});

router.patch('/approve-order-simulate-db-error/:orderId', (req, res, next) => {
  const orderId = parseInt(req.params.orderId);
  const order = orders.find(o => o.id === orderId);

  if (order) {
    order.status = 'approved';
    res.status(200).json(order);
  } else {

    // Approach 1
    // const notFoundError = new Error('Order not found');
    // notFoundError.name = 'NotFoundError';
    // return next(notFoundError);

    // Approach 2
    if (Math.random() < 0.5) {
      const databaseError = new Error('Database error');
      databaseError.name = 'DatabaseError';
      return next(databaseError);
    }
  }
});

// To be more consistent it's kinda better to replace by "PATCH /orders/{orderId}/reject"
router.patch('/reject-order/:orderId', (req, res) => {
  const orderId = parseInt(req.params.orderId);
  const order = orders.find(o => o.id === orderId);

  if (order) {
    order.status = 'rejected';
    res.status(200).json(order);
  } else {
    res.status(404).json({ error: 'Order not found' });
  }
});

router.delete('/order/:orderId', checkUserRole('admin'), (req, res) => {
  const orderId = parseInt(req.params.orderId);
  const index = orders.findIndex(o => o.id === orderId);

  if (index !== -1) {
    orders.splice(index, 1);
    // res.status(204).send(); // if no data to send back
    res.status(204).json({ message: 'Order deleted successfully' });
  } else {
    // res.status(404).send(); // if no data to send back
    res.status(404).json({ error: 'Order not found' });
  }
});

// We can call same middleware in the context of Routers API handlers at any place. It will simply attach to the dedicated middleware stack
// It's especially crucial if the dedicated file *.js is tested by dedicated *.test.js file
router.use(errorHandler);

module.exports = router;
