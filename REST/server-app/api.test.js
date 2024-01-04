const express = require('express');
const request = require('supertest');
const apiRouter = require('./api');

const testApp = express();

testApp.use(apiRouter); // Mount the API router at the root path for testing

describe('API Tests', () => {
  // let server;

  // beforeAll((done) => {
  //   server = testApp.listen(3001, () => {
  //     done();
  //   });
  // });

  // afterAll((done) => {
  //   server.close(done);
  // });

  describe('GET /orders or /orders?type=', () => {
    it('should get all orders', async () => {
      const response = await request(testApp).get('/orders');
      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(2);
    });

    it('should get filtered orders by type', async () => {
      const response = await request(testApp).get('/orders?type=phones');
      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(1);
    });
  });

  describe('GET /orders/:orderId', () => {
    it('should get a specific order by ID', async () => {
      const orderId = 1;
      const response = await request(testApp).get(`/orders/${orderId}`);
      expect(response.status).toBe(200);
      expect(response.body.id).toBe(orderId);
    });
  });

  describe('GET /orders/item/:itemId', () => {
    it('should get orders containing a specific item by ID', async () => {
      const itemId = 101;
      const response = await request(testApp).get(`/orders/item/${itemId}`);
      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(1);
    });
  });

  describe('POST /order', () => {
    it('should create a new order', async () => {
      const newOrder = { items: [{ itemId: 103, name: 'Item C' }], status: 'pending' };
      const response = await request(testApp).post('/order').send(newOrder);
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('items');
      expect(response.body).toEqual(expect.objectContaining(newOrder));
    });
  });

  describe('PUT /order/:orderId', () => {
    it('should update an existing order', async () => {
      const orderId = 2; // Using 3 as recently created from POST would OK but forces to run this test after POST test
      const updatedOrder = { items: [{ itemId: 102 }] }; // deliberately not providing `status` field.

      // Perform the PUT request
      const response = await request(testApp)
        .put(`/order/${orderId}`)
        .send(updatedOrder)
        .expect(200); // Expecting a successful update response

      expect(response.body).toHaveProperty('items');
      expect(response.body.id).toEqual(2);
      expect(response.body.status).toEqual(null);
    });

    it('should return 404 when trying to update a non-existing order', async () => {
      const nonExistentOrderId = 999; // Replace with a non-existing order ID
      const updatedOrder = { items: [{ itemId: 102, name: 'Updated Item' }], status: 'approved' };

      // Perform the PUT request for a non-existing order
      await request(testApp)
        .put(`/order/${nonExistentOrderId}`)
        .send(updatedOrder)
        .expect(404); // Expecting a 404 Not Found response
    });
  });

  describe('PATCH /approve-order/:orderId', () => {
    it('should approve an order', async () => {
      const orderId = 1;
      const response = await request(testApp).patch(`/approve-order/${orderId}`);
      expect(response.status).toBe(200);
      expect(response.body.status).toBe('approved');
    });

    it('should return 404 when trying to approve not existing order', async () => {
      const orderId = 4; // 3 used during emulation of POST
      const response = await request(testApp).patch(`/approve-order/${orderId}`);
      expect(response.status).toBe(404);
      // expect(response.body).toEqual({});
      expect(response.body.error).toEqual("Order not found");
    });
  });

  describe('PATCH /reject-order/:orderId', () => {
    it('should reject an order', async () => {
      const orderId = 1;
      const response = await request(testApp).patch(`/reject-order/${orderId}`);
      expect(response.status).toBe(200);
      expect(response.body.status).toBe('rejected');
    });

    it('should return 404 when trying to reject a not existing order', async () => {
      const orderId = 4; // 3 used during emulation of POST
      const response = await request(testApp).patch(`/reject-order/${orderId}`);
      expect(response.status).toBe(404);
      expect(response.body.error).toEqual("Order not found");
    });
  });

  describe('DELETE /order/:orderId', () => {
    it('should return 204 No Content (when delete a specific order by ID with admin user)', async () => {
      const orderId = 1;
      const adminUsername = 'admin';

      const response = await request(testApp)
        .delete(`/order/${orderId}`)
        .set('x-username', adminUsername);

      expect(response.status).toBe(204);
    });

    it('should return 403 Forbidden (when trying to delete a specific order by ID with regular user)', async () => {
      const orderId = 1;
      const nonAdminUsername = 'user';

      const response = await request(testApp)
        .delete(`/order/${orderId}`)
        .set('x-username', nonAdminUsername);

      expect(response.status).toBe(403);
    });

    it('should return 401 Unauthorized (when trying to delete a specific order by ID with non-existing user)', async () => {
      const orderId = 1;
      const nonExistingUsername = 'andriiUser';

      const response = await request(testApp)
        .delete(`/order/${orderId}`)
        .set('x-username', nonExistingUsername);

      expect(response.status).toBe(401);
    });

    it('should return 404 Not Found (when trying to delete a not existing order by ID with admin user)', async () => {
      const orderId = 4; // 3 used during emulation of POST
      const adminUsername = 'admin';

      const response = await request(testApp)
        .delete(`/order/${orderId}`)
        .set('x-username', adminUsername);

      expect(response.status).toBe(404);
    });
  });
});
