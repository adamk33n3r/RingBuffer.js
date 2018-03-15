"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("./LinkedList");
class RingBuffer extends LinkedList_1.LinkedList {
    constructor(size) {
        super();
        this.size = size;
        this.currentSize = 0;
    }
    push(item) {
        super.push(item);
        // Have not yet reached max size
        if (this.currentSize < this.size) {
            this.currentSize++;
        }
        else {
            this.head = this.head.next;
        }
    }
    pop() {
        this.currentSize--;
        return super.pop();
    }
}
exports.RingBuffer = RingBuffer;
class RingBufferArray {
    constructor(size) {
        this.size = size;
        this.head = null;
        this.tail = null;
        this.arr = new Array(this.size);
    }
    push(item) {
        // First insert
        if (this.head == null) {
            this.head = 0;
            this.tail = 0;
        }
        else {
            this.tail = (this.tail + 1) % this.size;
            if (this.tail === this.head) {
                this.head = (this.tail + 1) % this.size;
            }
        }
        this.arr[this.tail] = item;
    }
    pop() {
        const data = this.arr[this.tail];
        this.tail = ((this.tail - 1) % this.size + this.size) % this.size;
        return data;
    }
    *[Symbol.iterator]() {
        let i = this.head;
        yield this.arr[i];
        do {
            i = (i + 1) % this.size;
            yield this.arr[i];
        } while (i !== this.tail);
    }
}
exports.RingBufferArray = RingBufferArray;
