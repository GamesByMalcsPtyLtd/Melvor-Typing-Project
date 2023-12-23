declare type HeapElement<T> = [T, number, number];
declare const enum HeapIndex {
    Obj = 0,
    Key = 1,
    Ind = 2
}
declare class MinHeapPriorityQueue<T> {
    _heap: HeapElement<T>[];
    _objMap: Map<T, HeapElement<T>>;
    get size(): number;
    get isEmpty(): boolean;
    constructor(objs: T[], priorities: number[]);
    /** Builds the min heap from an un-ordered array */
    _build(): void;
    /** Performs the min-heapify procedure on the heap at index i. Sifts the element down until the min-heap property is satisfied */
    _heapify(i: number): void;
    /** Inserts an object with the specified priority */
    insert(obj: T, priority: number): void;
    /** Peeks the object with the lowest priority in the queue */
    peek(): T | undefined;
    /** Returns if a given object is in the queue */
    inQueue(obj: T): boolean;
    /** Extracts the object with the minimum priority */
    extractMin(): T;
    /** Decreases the priority of the specified object to the new priority */
    decreasePriority(obj: T, newPriority: number): void;
    /** Deletes an object from the queue */
    delete(obj: T): void;
    /** Sifts an element i up, until the min heap propery is satisfied */
    _siftUp(i: number): void;
    /** Decrease the key of the specified index in the heap to the new value */
    _decreaseKey(i: number, key: number): void;
    _swap(i: number, j: number): void;
    _parent(i: number): number;
    _left(i: number): number;
    _right(i: number): number;
}
interface DLLNode<T> {
    prev?: DLLNode<T>;
    next?: DLLNode<T>;
    obj: T;
}
declare class DoublyLinkedList<T> {
    _head?: DLLNode<T>;
    _tail?: DLLNode<T>;
    /** If there are no nodes in the list */
    get isEmpty(): boolean;
    /** Traverses each object, from the start to the end */
    forEachForward(callbackFn: (obj: T, i: number) => void): void;
    /** Travereses each object, from the end to the start */
    forEachReverse(callbackFn: (obj: T, i: number) => void): void;
    /** Traverses forward in the list looking for the first index of an object that matches predicate. Returns -1 if no match found. */
    findIndex(predicate: (obj: T, i: number) => boolean): number;
    /** Inserts a node after the given node */
    _insertAfter(node: DLLNode<T>, newNode: DLLNode<T>): void;
    /** Inserts node before the given node */
    _insertBefore(node: DLLNode<T>, newNode: DLLNode<T>): void;
    /** Inserts a node at the start of the list */
    _insertStart(newNode: DLLNode<T>): void;
    /** Inserts a node at the end of the list */
    _insertEnd(newNode: DLLNode<T>): void;
    /** Removed a node from the list */
    _removeNode(node: DLLNode<T>): void;
}
declare class LinkQueue<T> extends DoublyLinkedList<T> {
    _objMap: Map<T, DLLNode<T>>;
    /** The number of objects currently in the queue */
    get size(): number;
    /** Returns if an object is currently in the queue */
    inQueue(obj: T): boolean;
    /** Adds an object to the end of the queue */
    queue(obj: T): void;
    /** Removes the first object from the queue and returns it */
    dequeue(): T;
    /** Deletes an object from the queue */
    delete(obj: T): void;
    /** Peeks the first object in the queue */
    peek(): T | undefined;
    /** Removes all objects from the queue */
    clear(): void;
}
declare type NestedMap<K, T> = Map<K, NestedMap<K, T> | T>;
declare class MultiMap<K, T> {
    get depth(): number;
    get size(): number;
    _size: number;
    _depth: number;
    _data: NestedMap<K, T>;
    constructor(depth: number);
    clear(): void;
    /** Deletes the value stored at the specified keys */
    delete(...keys: K[]): void;
    /**
     * Gets a value stored at the specified keys
     * @param keys Keys to index into the map in order
     * @returns The value at the given keys, or undefined if not set
     */
    get(...keys: K[]): T | undefined;
    /**
     * Sets the value stored at the specified keys
     * @param value Value to set at the specified keys
     * @param keys Keys to set the value to in order
     */
    set(value: T, ...keys: K[]): void;
    /**
     * Checks if the map has a value set at the specified keys
     * @param keys Keys to index into the map in order
     * @returns If the map has a value at the specified keys
     */
    has(...keys: K[]): boolean;
    _checkKeys(keys: K[]): void;
}
