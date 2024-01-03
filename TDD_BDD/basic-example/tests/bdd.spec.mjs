// import { describe, it } from 'mocha';
import { expect } from 'chai';
import { add } from '../src/add.mjs';
import { multiply } from '../src/multiply.mjs';

function customFormula(a, b) {
  if (a === b) {
    return add(a, b)
  } else {
    return multiply(a, b)
  }
}

describe('test custom formula (feature) behavior', () => {
  it('should consider if values are the same', () => {
    expect(customFormula(0, 0)).to.equal(0);
    expect(customFormula(2, 2)).to.equal(4);
    expect(customFormula(3, 3)).to.equal(6);
  });

  it('should consider if values are different', () => {
    expect(customFormula(1, 3)).to.equal(3);
    expect(customFormula(2, 3)).to.equal(6);
    expect(customFormula(3, 6)).to.equal(18);
  });
})
