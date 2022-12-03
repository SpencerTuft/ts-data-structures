import { Node } from '../src'

describe('Node', () => {
  it('should create a node from a value', () => {
    const node = new Node(1)
    expect(node.value).toEqual(1)
    expect(node.prev).toEqual(null)
    expect(node.next).toEqual(null)
  })
  it('should tail a series of nodes', () => {
    const head = new Node(1)
    const tail = head.tail(2).tail(3)
    expect(tail.prev?.prev).toEqual(head)
  })
  it('should head a series of nodes', () => {
    const tail = new Node(3)
    const head = tail.head(2).head(1)
    expect(head.next?.next).toEqual(tail)
  })
  it('should remove a middle node', () => {
    const head = new Node(1)
    const middle = new Node(2)
    const tail = new Node(3)
    head.tail(middle).tail(tail)
    middle.delete()

    expect(head.next).toEqual(tail)
    expect(middle.prev).toEqual(null)
    expect(middle.next).toEqual(null)
    expect(tail.prev).toEqual(head)
  })
  it('should remove the head node', () => {
    const head = new Node(1)
    const middle = new Node(2)
    const tail = new Node(3)
    head.tail(middle).tail(tail)
    head.delete()

    expect(head.next).toEqual(null)
    expect(middle.prev).toEqual(null)
    expect(middle.next).toEqual(tail)
    expect(tail.prev).toEqual(middle)
  })
  it('should remove the tail node', () => {
    const head = new Node(1)
    const middle = new Node(2)
    const tail = new Node(3)
    head.tail(middle).tail(tail)
    tail.delete()

    expect(head.next).toEqual(middle)
    expect(middle.prev).toEqual(head)
    expect(middle.next).toEqual(null)
    expect(tail.prev).toEqual(null)
  })
})
