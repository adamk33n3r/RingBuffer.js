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

  it('should return empty array when calling .all() and empty', () => {
    const linkedList = new LinkedList<number>();
    expect(linkedList.all().length).to.equal(0);
  });

  it('should pop undefined when length of 0', () => {
    const linkedList = new LinkedList<number>();
    expect(linkedList.pop()).to.equal(undefined);
  });

  it('should pop item when length of 1', () => {
    const linkedList = new LinkedList<number>();
    linkedList.push(1);
    expect(linkedList.pop()).to.equal(1);
  });

  it('should remove head when popping last item', () => {
    const linkedList = new LinkedList<number>();
    linkedList.push(1);
    linkedList.pop();
    console.log(linkedList);
    expect(linkedList.head).to.equal(null);
  });
});
