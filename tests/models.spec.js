const Artist = require('../server/db/artist.js');
const chai = require('chai');
const expect = chai.expect;

describe('models', () => {
  describe('artist', () => {
    it('has a name field', () => {
      const name = 'Dexter Britain';

      const dexterBritain = Artist.build({ name });
      expect(dexterBritain.name).to.equal(name);
    });

    it('requires name', async () => {
      const noName = Artist.build({ foo: 'bar' });

      let errorThrown = false;
      try {
        await noName.validate();
      } catch (err) {
        errorThrown = true;
      }

      expect(errorThrown).to.equal(true);
    });
  });
});