import { expect } from 'chai';
import 'mocha';

import { RingBuffer } from '../src/RingBuffer';

describe('RingBuffer', () => {
  const ringBuffer = new RingBuffer<number>(5);
  it('should remain at size after pushing more', () => {
    ringBuffer.push(1);
    ringBuffer.push(2);
    ringBuffer.push(3);
    ringBuffer.push(4);
    ringBuffer.push(5);
    ringBuffer.push(6);
    ringBuffer.push(7);

    expect(ringBuffer.all().length).to.equal(5);
  });
});
