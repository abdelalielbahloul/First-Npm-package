const test = require('mocha');
const generateRandomString = require('../index');

describe("test mocha", () => {
    const string = generateRandomString();
    it('should be a string', (string) => {
        typeof string === 'string'
    })
    
})
