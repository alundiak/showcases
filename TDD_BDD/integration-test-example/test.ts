// integration.test.ts

// @ts-ignore
import request from 'supertest';
// @ts-ignore
import { app } from './server'; // assuming the server is exported from server.ts

// @ts-ignore
describe('Integration Test: Calculator API', () => {
  // @ts-ignore
  it('should correctly add two numbers via API', async () => {
    const response = await request(app).get('/calculator/add').query({ num1: 2, num2: 3 });

    // @ts-ignore
    expect(response.status).toBe(200);
    // @ts-ignore
    expect(response.body.result).toBe(5);
  });
});

// We use supertest to make an HTTP request to the /calculator/add endpoint of our server.
// The test checks if the response status is 200 and if the result in the response body is 5 (the expected sum of 2 and 3).
