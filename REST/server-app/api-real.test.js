// TBD
const express = require('express');
const request = require('supertest');
const realApi = require('./api-real');

const testApp = express();

// MAYBE
// And then mock the database connection for testing
// jest.mock('./database');
// Jest replaces the real Database class with an automatically generated mock. 
// MAYBE

testApp.use(realApi); // Mount the API router at the root path for testing

describe('Express Server API', () => {
  test('POST /order should create a new order', async () => {
    const response = await request(testApp).post('/order').send({ item: 'Item A' });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('orderId');
  });

  test('GET /orders should return all orders', async () => {
    const response = await request(testApp).get('/orders');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1); // Assuming one order was created in the previous test
  });
});
