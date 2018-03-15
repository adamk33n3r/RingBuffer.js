import { LinkedList } from './LinkedList';
export declare class RingBuffer<T> extends LinkedList<T> {
    protected size: number;
    protected currentSize: number;
    constructor(size: number);
    push(item: T): void;
    pop(): T;
}
export declare class RingBufferArray<T> {
    protected size: number;
    protected arr: T[];
    protected head: number;
    protected tail: number;
    constructor(size: number);
    push(item: T): void;
    pop(): T;
    [Symbol.iterator](): Iterator<T>;
}
