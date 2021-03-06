"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LinkedListNode {
    constructor(data) {
        this.data = data;
    }
}
exports.LinkedListNode = LinkedListNode;
class LinkedList {
    push(item) {
        const newNode = new LinkedListNode(item);
        // First insert
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    pop() {
        const data = this.tail.data;
        this.tail = this.tail.prev;
        // Remove reference to popped node
        this.tail.next = null;
        return data;
    }
    each(func) {
        let cur = this.head;
        do {
            func(cur.data);
        } while ((cur = cur.next) != null);
    }
    all() {
        const arr = [];
        this.each((data) => {
            arr.push(data);
        });
        return arr;
    }
    *[Symbol.iterator]() {
        let cur = this.head;
        do {
            yield cur.data;
        } while ((cur = cur.next) != null);
    }
}
exports.LinkedList = LinkedList;
