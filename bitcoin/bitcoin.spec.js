/**
 * Created by ryancui on 2017/6/21.
 */

const f = require('./bitcoin');
const should = require('should');

describe('Bit coin test', function () {
  it('First test case', function () {
    (5).should.be.exactly(5).and.be.a.Number();
  });

  it('Second test case', function () {
    (123).should.be.exactly(123).and.be.a.Number();
  });
});

