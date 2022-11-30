import { Node } from '@structure/node'

export class LinkedList<T> {
  head: Node<T> | null = null
  tail: Node<T> | null = null

  static from<T>(values: T[]): LinkedList<T> {
    const list = new LinkedList<T>()
    values.forEach(value => list.append(value))
    return list
  }

  prepend (value: T): this {
    const node = new Node(value, this.head)
    this.head = node
    if (this.tail == null) {
      this.tail = node
    }
    return this
  }

  append (value: T): this {
    const node = new Node(value)
    if (this.head == null || (this.tail == null)) {
      this.head = node
      this.tail = node
      return this
    }
    this.tail.next = node
    this.tail = node
    return this
  }

  delete (value: T): Node<T> | null {
    if (this.head == null || this.tail == null) {
      return null
    }
    let deleted = null
    while (this.head != null && this.head.value === value) {
      deleted = this.head
      this.head = this.head.next
    }
    let current = this.head
    if (current != null) {
      while (current.next != null) {
        if (current.next.value === value) {
          deleted = current.next
          current.next = current.next.next
        } else {
          current = current.next
        }
      }
    }
    if (this.tail.value === value) {
      this.tail = current
    }
    return deleted
  }

  find (callback?: (value: T) => boolean): Node<T> | null {
    if (this.head == null) {
      return null
    }
    let current: Node<T> | null = this.head
    while (current != null) {
      if (callback?.(current.value) != null) {
        return current
      }
      current = current.next
    }
    return null
  }

  deleteTail (): Node<T> | null {
    const deleted = this.tail
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      return null
    }
    let current = this.head
    while (current?.next != null) {
      if (current.next.next == null) {
        current.next = null
      } else {
        current = current.next
      }
    }
    this.tail = current
    return deleted
  }

  deleteHead (): Node<T> | null {
    if (this.head == null) {
      return null
    }
    const deleted = this.head
    if (this.head.next != null) {
      this.head = this.head.next
    } else {
      this.head = null
      this.tail = null
    }
    return deleted
  }

  toArray (): Array<Node<T>> {
    const nodes: Array<Node<T>> = []
    let current = this.head
    while (current != null) {
      nodes.push(current)
      current = current.next
    }
    return nodes
  }

  toString (callback?: (value: T) => string): string {
    return this.toArray().map(node => node.toString(callback)).toString()
  }

  reverse (): this {
    let current = this.head
    let previous = null
    let next = null
    while (current != null) {
      next = current.next
      current.next = previous
      previous = current
      current = next
    }
    this.tail = this.head
    this.head = previous
    return this
  }
}
