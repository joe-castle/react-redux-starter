'use strict';

const request = require('supertest');

const app = require('../../../src/backend/routes');

describe('Express Routes', () => {
  describe('To root path', () => {
    it('Returns 200 status', (done) => {
      request(app)
        .get('/')
        .expect(200, done)
    });
    it('Returns a Content-Type of HTML', (done) => {
      request(app)
        .get('/')
        .expect('Content-Type', /html/, done)
    });
  });
});
