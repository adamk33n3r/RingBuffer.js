export declare class LinkedListNode<T> {
    data: T;
    next: LinkedListNode<T>;
    prev: LinkedListNode<T>;
    constructor(data: T);
}
export declare class LinkedList<T> {
    protected head: LinkedListNode<T>;
    protected tail: LinkedListNode<T>;
    push(item: T): void;
    pop(): T;
    each(func: (data: T) => void): void;
    all(): T[];
    [Symbol.iterator](): Iterator<T>;
}
