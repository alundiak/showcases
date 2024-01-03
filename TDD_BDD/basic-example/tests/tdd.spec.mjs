// import { describe, it } from 'mocha';
import { expect } from 'chai';
import { add } from '../src/add.mjs';
import { multiply } from '../src/multiply.mjs';

describe('test add()', () => {
  it('should add 0 and 0', () => {
    expect(add(0, 0)).to.equal(0);
  });

  it('should add 2 and 2', () => {
    expect(add(2, 2)).to.equal(4);
  });
})

describe('test multiply()', () => {
  it('should multiply 0 and 0', () => {
    expect(multiply(0, 0)).to.equal(0);
  });

  it('should multiply 2 and 2', () => {
    expect(multiply(2, 2)).to.equal(4);
  });
})
