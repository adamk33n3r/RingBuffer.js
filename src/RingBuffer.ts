import { LinkedList, LinkedListNode } from './LinkedList';

export class RingBuffer<T> extends LinkedList<T> {
    protected currentSize = 0;

    public constructor(protected size: number) {
        super();
    }

    public push(item: T): void {
        super.push(item);

        // Have not yet reached max size
        if (this.currentSize < this.size) {
            this.currentSize++;
        } else {
            this.head = this.head.next;
        }
    }

    public pop(): T {
        this.currentSize--;
        return super.pop();
    }
}

export class RingBufferArray<T> {
    protected arr: T[];
    protected head: number = null;
    protected tail: number = null;
    public constructor(protected size: number) {
        this.arr = new Array(this.size);
    }

    public push(item: T): void {
        // First insert
        if (this.head == null) {
            this.head = 0;
            this.tail = 0;
        } else {
            this.tail = (this.tail + 1) % this.size;
            if (this.tail === this.head) {
                this.head = (this.tail + 1) % this.size;
            }
        }
        this.arr[this.tail] = item;
    }

    public pop(): T {
        const data = this.arr[this.tail];
        this.tail = ((this.tail - 1) % this.size + this.size) % this.size
        return data;
    }

    public *[Symbol.iterator](): Iterator<T> {
        let i = this.head;
        yield this.arr[i];
        do {
            i = (i + 1) % this.size;
            yield this.arr[i];
        }
        while (i !== this.tail);
    }
}
