import { LinkedList } from './src/LinkedList';
import { RingBuffer, RingBufferArray } from './src/RingBuffer';

const linkedList = new LinkedList<number>();

linkedList.push(1);
linkedList.push(2);
linkedList.push(4);
const data = linkedList.pop();
console.log('Popped:', data);
linkedList.push(3);

console.log('all:', linkedList.all());

console.log('using iterator');
for (let item of linkedList) {
    console.log(item);
}

console.log('using each');
linkedList.each((data) => {
    console.log(data);
});

console.log();
console.log();
console.log();
console.log();
console.log();

const ringBuffer = new RingBuffer<number>(5);
ringBuffer.push(1);
ringBuffer.push(2);
ringBuffer.push(3);
ringBuffer.push(4);
ringBuffer.push(5);
// After this `1` should be gone
ringBuffer.push(6);
console.log('popped', ringBuffer.pop());
ringBuffer.push(7);
console.log('ring buffer');
for (let item of ringBuffer) {
    console.log(item);
}

console.log();
console.log();
console.log();
console.log();
console.log();

const ringBufferArray = new RingBufferArray<number>(5);
ringBufferArray.push(1);
ringBufferArray.push(2);
ringBufferArray.push(3);
ringBufferArray.push(4);
ringBufferArray.push(5);
// After this `1` should be gone
ringBufferArray.push(6);
console.log('popped:', ringBufferArray.pop());
ringBufferArray.push(7);
console.log('ring buffer array');
for (let item of ringBufferArray) {
    console.log(item);
}
