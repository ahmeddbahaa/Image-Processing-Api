/* eslint-disable no-undef */
import supertest from 'supertest';
import app from '../app';

const request = supertest(app);
describe('Test Image Processing endpoint responses', () => {
  it('Test the api/images endpoint', () => {
    request.get('/api/images').then((response) => {
      expect(response.status).toEqual(200);
    });
  });
});
