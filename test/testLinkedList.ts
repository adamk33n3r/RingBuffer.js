import { expect } from 'chai';
import 'mocha';

import { LinkedList } from '../src/LinkedList';

describe('LinkedList', () => {
  const linkedList = new LinkedList<number>();
  it('should push and pop values', () => {
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(4);
    const data = linkedList.pop();
    linkedList.push(3);

    expect(linkedList.all().length).to.equal(3);
  });

  it('should iterate with for loop', () => {
    let i = 0;
    for (let item of linkedList) {
      i++;
    }
    expect(i).to.equal(3);
  });

  it('should iterate with each', () => {
    let i = 0;
    linkedList.each((item) => {
      i++;
    });
    expect(i).to.equal(3);
  });
});
