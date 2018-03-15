# RingBuffer.js
TypeScript implementation of a ring buffer

## Instalation
```sh
yarn add ringbuffer.js
npm install ringbuffer.js --save
```

## Usage

### Javascript

```javascript
var RingBuffer = require('ringbuffer.js').RingBuffer;

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
import { RingBuffer } from 'ringbuffer.js';

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
