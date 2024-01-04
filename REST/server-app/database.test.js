const Database = require('./database');

describe('Database Operations', () => {
  test('createOrder should insert a new order into the database', async () => {
    const db = await Database.connect();
    const orderId = await Database.createOrder(db, { item: 'Item B' });
    await db.close();
    expect(orderId).toBe(2); // Assuming this is the second order in the database
  });

  test('getOrders should return all orders from the database', async () => {
    const db = await Database.connect();
    const orders = await Database.getOrders(db);
    await db.close();
    expect(orders).toHaveLength(2); // Assuming two orders are in the database now
  });
});
