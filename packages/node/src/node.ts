export interface BetweenNodes<T> {
  prev?: Node<T>
  next?: Node<T>
}

export class Node<T> {
  value: T
  prev: Node<T> | null = null
  next: Node<T> | null = null

  constructor (value: T, between: BetweenNodes<T> = {}) {
    this.value = value
    this.insert(between)
  }

  static from<T>(node: T | Node<T>, between: BetweenNodes<T> = {}) {
    return node instanceof Node ? new Node(node.value, between) : new Node(node, between)
  }

  protected insert (nodes: BetweenNodes<T>): this {
    if (nodes.next != null) {
      nodes.next.prev = this
      this.next = nodes.next
    }
    if (nodes.prev != null) {
      nodes.prev.next = this
      this.prev = nodes.prev
    }
    return this
  }

  tailOf (prev: T| Node<T>): this {
    prev = prev instanceof Node ? prev : new Node(prev)
    return this.insert({ prev })
  }

  head (prev: T | Node<T>): Node<T> {
    prev = prev instanceof Node ? prev : new Node(prev)
    this.tailOf(prev)
    return prev
  }

  headOf (next: T | Node<T>): this {
    next = next instanceof Node ? next : new Node(next)
    return this.insert({ next })
  }

  tail (next: T | Node<T>): Node<T> {
    next = next instanceof Node ? next : new Node(next)
    this.headOf(next)
    return next
  }

  delete (): void {
    if (this.prev != null) {
      this.prev.next = this.next
    }
    if (this.next != null) {
      this.next.prev = this.prev
    }
    this.prev = null
    this.next = null
  }

  toString (): string {
    return `Node<${String(this.value)}>`
  }
}
