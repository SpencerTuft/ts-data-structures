import { ulid } from 'ulid'
import { Edge } from './edge'
import { LinkedList } from '@structure/linked-list'
import { Node } from '@structure/node'

export class Vertex<T> {
  readonly key: string
  readonly value: T
  readonly edges: LinkedList<Edge<T>>

  constructor (value: T, key?: string) {
    if (value === undefined) {
      throw new Error('Vertex must have a value')
    }

    this.key = key === undefined ? ulid() : key
    this.value = value
    this.edges = new LinkedList()
  }

  add (edge: Edge<T>): this {
    this.edges.append(edge)
    return this
  }

  delete (edge: Edge<T>): void {
    this.edges.delete(edge)
  }

  getNeighbors (): Array<Vertex<T>> {
    const edges = this.edges.toArray()

    return edges.map((node: Node<Edge<T>>) => {
      return node.value.start === this ? node.value.end : node.value.start
    })
  }

  getEdges (): Array<Edge<T>> {
    return this.edges.toArray().map(node => node.value)
  }

  getDegree (): number {
    return this.edges.toArray().length
  }

  hasEdge (requireEdge: Edge<T>): boolean {
    const edgeNode = this.edges.find(edge => edge.key === requireEdge.key)
    return edgeNode != null
  }

  hasNeighbor (vertex: Vertex<T>): boolean {
    const vertexNode = this.edges.find(edge => edge.start.key === vertex.key || edge.end.key === vertex.key)
    return vertexNode != null
  }

  findEdge (vertex: Vertex<T>): Edge<T> | null {
    const edge = this.edges.find((edge) => edge.start.key === vertex.key || edge.end.key === vertex.key)
    return edge?.value ?? null
  }

  deleteAllEdges (): this {
    this.getEdges().forEach(edge => this.delete(edge))
    return this
  }

  toString (callback?: (value: T) => string): string {
    return callback != null ? callback(this.value) : `${String(this.value)}`
  }
}
