const Artist = require('../server/db/artist');
const chai = require('chai');
const expect = chai.expect;

describe('models', () => {
    describe('artist', () => {
        it('has a name field', () => {
            const name = "Dexter Britain";
            const dexterBritain = Artist.build({ name });
            expect(dexterBritain.name).to.equal('Dexter Britain');
        });

        it('artist requires a name', async () => {

            const name = null;
            const noName = Artist.build({ name });

            let errorThrown = false;
            try {
                await noName.validate()
            } catch (error) {
                errorThrown = true;                
            }

            expect(errorThrown).to.equal(true);
        });
    });

});