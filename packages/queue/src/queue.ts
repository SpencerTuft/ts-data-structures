export class Queue<T> {
  private readonly data: T[] = []
  readonly fifo: boolean

  constructor (options?: { fifo: boolean }) {
    this.fifo = options?.fifo ?? true
  }

  add (value: T): number {
    if (!this.fifo) {
      return this.data.unshift(value)
    }
    return this.data.push(value)
  }

  remove (index: number): T | undefined {
    return this.data.shift()
  }

  peek (): T | undefined {
    return this.data[0]
  }
}
