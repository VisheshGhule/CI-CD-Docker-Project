const request = require('supertest');
const app = require('../src/server');

describe('Express app', () => {
  it('GET / returns JSON message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(res.body).toHaveProperty('message');
  });

  it('GET /healthz returns ok', async () => {
    const res = await request(app).get('/healthz');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('ok');
  });
});
