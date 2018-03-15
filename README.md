# RingBuffer.js
TypeScript implementation of a ring buffer

## Installation
```sh
yarn add @adamk33n3r/ringbuffer.js
npm install @adamk33n3r/ringbuffer.js --save
```

## Usage

### Javascript

```javascript
var RingBuffer = require('@adamk33n3r/ringbuffer.js').RingBuffer;

var ringBuffer = new RingBuffer(5);
ringBuffer.push(1);
ringBuffer.push(2);
ringBuffer.push(3);
ringBuffer.push(4);
ringBuffer.push(5);
ringBuffer.push(6);

ringBuffer.all(); // [ 2, 3, 4, 5, 6 ]
```

### Typescript

```typescript
import { RingBuffer } from '@adamk33n3r/ringbuffer.js';

const ringBuffer = new RingBuffer(5);
ringBuffer.push(1);
ringBuffer.push(2);
ringBuffer.push(3);
ringBuffer.push(4);
ringBuffer.push(5);
ringBuffer.push(6);

ringBuffer.all(); // [ 2, 3, 4, 5, 6 ]
```

## Test

```sh
yarn test
npm test
```
