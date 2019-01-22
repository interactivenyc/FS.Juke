const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('../server/index.js');

describe('routes', () => {
  const Album = require('../server/db/album.js');

  beforeEach(async () => {
    await Album.sync({ force: true });
    await Album.bulkCreate([
      {
        name: 'foo'
      },
      {
        name: 'bar'
      }
    ])
  });

  after(async () => {
    await Album.sync({ force: true });
  });

  describe('GET /api/albums', () => {
    it('responds w/ json for albums in db', async () => {
      const response = await request(app)
        .get('/api/albums')
        .expect(200);

      expect(response.body.length).to.equal(2);
      expect(response.body[0]).to.be.an('object');
    });
  });
});
