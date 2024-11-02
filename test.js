const request = require('supertest');
const app = require('../app'); // Adjust this if necessary

describe('GET /', () => {
    it('should return Hello, World!', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect('Hello, World!', done);
    });
});
