/* eslint-disable no-undef */
import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test Root endpoint responses', () => {
  it('gets the api endpoint', () => {
    request.get('/images').then((response) => {
      expect(response.status).toBe(200);
    });
  });
});
