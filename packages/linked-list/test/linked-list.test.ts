import { LinkedList } from '../src'

describe('LinkedList', () => {
  let list: LinkedList<number>

  beforeEach(() => {
    list = new LinkedList(1, 2, 3)
  })

  it('should prepend to the list', () => {
    list.push(4)
    expect(list.length).toEqual(4)
    expect(list.cursor?.value).toEqual(1)
  })
  it('should append to the list', () => {
    list.unshift(4)
    expect(list.length).toEqual(4)
    expect(list.cursor?.value).toEqual(4)
  })
  it('should get the value at a positive index position', () => {
    expect(list.at(0)).toEqual(1)
    expect(list.at(1)).toEqual(2)
  })
  it('should get the value at a negative index position', () => {
    expect(list.at(-0)).toEqual(1)
    expect(list.at(-1)).toEqual(3)
  })
  it('should get the value for a position "out of bounds"', () => {
    expect(list.at(3)).toEqual(1)
  })
  it('should insert a node at the head', () => {
    list.splice(0, 0, 4, 5)
    console.info(list.toString())
    expect(list.cursor?.value).toEqual(4)
    expect(list.cursor?.next?.value).toEqual(5)
  })
  it('should insert a node at the tail', () => {
    list.splice(-0, 0, 4, 5)
    expect(list.at(-1)).toEqual(5)
    expect(list.at(-2)).toEqual(4)
  })
  it('should insert a node in the middle', () => {
    list.splice(1, 0, 4, 5)
    console.info(list.toString())
    expect(list.cursor?.value).toEqual(1)
    expect(list.at(1)).toEqual(4)
    expect(list.at(2)).toEqual(5)
  })
  it('should convert the linked list to an array', () => {
    expect(list.toArray()).toEqual([1, 2, 3])
  })
})
