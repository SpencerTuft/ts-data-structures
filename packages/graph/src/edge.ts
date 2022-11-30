import { Vertex } from './vertex'

export class Edge<T> {
  start: Vertex<T>
  end: Vertex<T>
  weight: number

  constructor (start: Vertex<T>, end: Vertex<T>, weight?: number) {
    this.start = start
    this.end = end
    this.weight = weight ?? 0
  }

  get key (): string {
    return `${this.start.key}_${this.end.key}`
  }

  reverse (): void {
    const temp = this.start
    this.start = this.end
    this.end = temp
  }

  toString (): string {
    return this.key
  }
}
