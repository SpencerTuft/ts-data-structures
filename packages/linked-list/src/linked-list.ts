import { Node } from '@oaspub/node'
import { isNegative } from './util'

export class LinkedList<T> {
  cursor: Node<T> | null = null
  length = 0

  constructor (...values: T[]) {
    this.push(...values)
  }

  private init (value: T): Node<T> {
    this.cursor = new Node(value)
    this.cursor.head(this.cursor)
    this.cursor.tail(this.cursor)
    return this.cursor
  }

  private direction (num: number): 'next' | 'prev' {
    return isNegative(num) ? 'prev' : 'next'
  }

  to (index: number): Node<T> | null {
    const direction = this.direction(index)
    index = Math.abs(index)

    let target: Node<T> | null = this.cursor
    while (target != null && index > 0) {
      target = target[direction]
      index--
    }

    return target
  }

  at (index: number): T | null {
    return this.to(index)?.value ?? null
  }

  unshift (...values: T[]): number {
    for (const value of values) {
      if (this.cursor == null) {
        this.init(value)
      } else {
        this.cursor = this.cursor.prev!.tail(value).headOf(this.cursor)
      }
      this.length++
    }
    return this.length
  }

  push (...values: T[]): number {
    for (const value of values) {
      if (this.cursor == null) {
        this.init(value)
      } else {
        this.cursor.prev!.tail(value).headOf(this.cursor)
      }
      this.length++
    }
    return this.length
  }

  splice (start: number, deleteCount: number, ...items: T[]) {
    if (deleteCount < 0) {
      // Cannot delete less than zero
      deleteCount = 0
    }

    // Find first node to delete
    const direction = this.direction(start)
    let cursor = this.to(start)

    // Delete nodes until none left or delete count is zero
    while (cursor != null && deleteCount > 0) {
      const next = cursor[direction]
      if (cursor === this.cursor) {
        this.cursor = next
      }
      cursor.delete()
      cursor = next
      deleteCount--
    }

    for (const item of items) {
      if (cursor == null) {
        cursor = this.init(item)
        this.cursor = cursor
      } else {
        const node = new Node(item)
        if (cursor === this.cursor) {
          this.cursor = node
        }
        if (direction === 'next') {
          cursor.prev!.tail(node).headOf(cursor)
        } else {
          cursor.next!.head(node).headOf(cursor)
        }
      }
    }
  }

  // find (callback?: (value: T) => boolean): Node<T> | null {
  //   if (this.head == null) {
  //     return null
  //   }
  //   let current: Node<T> | null = this.head
  //   while (current != null) {
  //     if (callback?.(current.value) != null) {
  //       return current
  //     }
  //     current = current.next
  //   }
  //   return null
  // }

  toArray (): Array<T> {
    const nodes: Array<T> = []
    let current: Node<T> | null = this.cursor
    while (current != null && current.next !== this.cursor) {
      // Stop when we get to the tail node
      nodes.push(current.value)
      current = current.next
    }
    if (current != null) {
      // Add the tail node
      nodes.push(current.value)
    }
    return nodes
  }

  toString (): string {
    return this.toArray().toString()
  }

  // reverse (): this {
  //   let current = this.head
  //   let previous = null
  //   let next = null
  //   while (current != null) {
  //     next = current.next
  //     current.next = previous
  //     previous = current
  //     current = next
  //   }
  //   this.tail = this.head
  //   this.head = previous
  //   return this
  // }
}
