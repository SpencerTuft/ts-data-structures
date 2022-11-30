import { Edge } from './edge'
import { Vertex } from './vertex'

export class Graph<T> {
  vertices: { [key: string]: Vertex<T> } = {}
  edges: { [key: string]: Edge<T> } = {}
  isDirected = false

  constructor (isDirected: boolean) {
    this.isDirected = isDirected
  }

  private toVertex (value: T | Vertex<T>): Vertex<T> {
    if (value instanceof Vertex) {
      return value
    }
    return new Vertex(value)
  }

  addVertex (value: T | Vertex<T>): this {
    value = this.toVertex(value)
    this.vertices[value.key] = value
    return this
  }

  getVertex (vertex: Vertex<T> | string): Vertex<T> {
    const vertexKey = typeof vertex === 'string' ? vertex : vertex.key
    return this.vertices[vertexKey]
  }

  getNeighbors (vertex: Vertex<T>): Array<Vertex<T>> {
    return vertex.getNeighbors()
  }

  getAllVertices (): Array<Vertex<T>> {
    return Object.values(this.vertices)
  }

  getAllEdges (): Array<Edge<T>> {
    return Object.values(this.edges)
  }

  addEdge (edge: Edge<T>): this {
    let startVertex = this.getVertex(edge.start)
    let endVertex = this.getVertex(edge.end)

    if (startVertex == null) {
      this.addVertex(edge.start)
      startVertex = this.getVertex(edge.start)
    }

    if (endVertex == null) {
      this.addVertex(edge.end)
      endVertex = this.getVertex(edge.end)
    }

    if (this.edges[edge.key] != null) {
      throw new Error('Edge has already been added before')
    } else {
      this.edges[edge.key] = edge
    }

    if (this.isDirected) {
      startVertex.add(edge)
    } else {
      startVertex.add(edge)
      endVertex.add(edge)
    }

    return this
  }
}
