/* eslint-disable no-undef */
import supertest from 'supertest';
import app from '../app';
import sharp from 'sharp';
import resizeImage from '../../utilities/image_processing';
const request = supertest(app);

describe('Test Resizing Image Function', () => {
  it('Expect the Returning height of image to be 1000', async () => {
    const result = await resizeImage('fjord', 1000, 1000);
    const meta = await sharp(result).metadata();
    expect(meta.height).toEqual(1000);
  });
  it('Expect the Returning Width of image to be 1000', async () => {
    const result = await resizeImage('fjord', 1000, 1000);
    const meta = await sharp(result).metadata();
    expect(meta.width).toEqual(1000);
  });
  it('Expect to Place the Resized Image in the desired path', async () => {
    const result = await resizeImage('fjord', 1000, 1000);
    expect(result).toEqual('assets/thumb/fjord.jpg');
  });
});
describe('Test Image Processing Endpoint Without Passing any arguments ', () => {
  it('Test the Status Code of the endpoint ', async () => {
    const result = await request.get('/api/images');
    expect(result.statusCode).toEqual(200);
  });
});
