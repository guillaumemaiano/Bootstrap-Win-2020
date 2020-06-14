const request = require('supertest');

// if testing code:
//const app = require('../../src/scripts/app.js');

//  Adapt based on whatever I use to serve, hugo dev server runs on 1313
const url = 'http://localhost:8080';

// Note adapted from an example
// really dislike how this bundles multiple expects
function testMainPage(done) {
        request(url)
            .get('/')
            .set('Accept', 'application/html')
            .expect('Content-Type', /html/)
            .expect(body).to.equal('Hello World')
            .expect(200, done);
}

describe('GET Main', function () {
    it('gets the main page content', testMainPage);
});