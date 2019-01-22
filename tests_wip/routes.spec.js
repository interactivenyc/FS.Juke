const Artist = require('../server/db/artist');
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('../server')

describe('routes', () => {

    const Album = require('../server/db/album')
    beforeEach(async () => {
        await 
    })

    describe('get albums api', () => {
        it('responds with json for albums', async () => {
            const response = await request(app)
                .get('/api/albums')
                .expect(200)

            expect(response.body.length).is.greaterThan(0);
            expect(response.body[0].artist).to.be.an("object")
        });

    });
});