export class Node<T> {
  value: T
  next: Node<T> | null = null

  constructor (value: T, next: Node<T> | null = null) {
    this.value = value
    this.next = next
  }

  toString (callback?: (value: T) => string): string {
    return callback != null ? callback(this.value) : `${String(this.value)}`
  }
}
