const invoices = require('../invoices.json');
const plays = require('../plays.json');

const program = require("../index");

const assert = require('assert');
describe('Program', function() {
  describe('#invoice', function() {
    it('should return string', function() {
      let result = "";
      for(let invoice of invoices){
        result = program(invoice, plays);
      }
    
      assert.strictEqual(result, "Statement for BigCo\n  Hamlet: $650.00 (55 seats)\n  As You Like It: $580.00 (35 seats)\n  Othello: $580.00 (48 seats)\nAmount owed is $1,810.00\nYou earned 55 credits\n");
    });
  });
});
