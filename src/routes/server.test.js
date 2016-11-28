import request from 'supertest';
import app from './server';

describe('Express Routes', () => {
  describe('To root path', () => {
    it('Returns HTML and 200 status', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /html/, done);
    });
  });
});
