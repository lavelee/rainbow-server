import server from '../server';
import request from 'supertest';

afterEach(done => {
  server.close();
  done();
});

describe("Healthcheck", () => {
  it('should return good', async () => {
    const response = await request(server).get('/');
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('text/plain');
    expect(response.text).toEqual('good');
  });
});