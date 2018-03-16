export class LinkedListNode<T> {
    public next: LinkedListNode<T>;
    public prev: LinkedListNode<T>;
    public constructor(public data: T) { }
}

export class LinkedList<T> {
    protected head: LinkedListNode<T>;
    protected tail: LinkedListNode<T>;

    public push(item: T): void {
        const newNode = new LinkedListNode(item);
        // First insert
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    public pop(): T {
        if (this.tail == null) {
          return undefined;
        }

        const data = this.tail.data;
        this.tail = this.tail.prev;

        // If tail is null then we popped head
        if (this.tail == null) {
          this.head = null;
        } else {
          // Remove reference to popped node
          this.tail.next = null;
        }
        return data;
    }

    public each(func: (data: T) => void): void {
        let cur = this.head;
        if (cur == null) {
          return;
        }

        do {
            func(cur.data);
        } while ((cur = cur.next) != null);
    }

    public all(): T[] {
        const arr: T[] = [];
        this.each((data) => {
            arr.push(data);
        })
        return arr;
    }

    public *[Symbol.iterator](): Iterator<T> {
        let cur = this.head;
        do {
            yield cur.data;
        } while ((cur = cur.next) != null);
    }
}
