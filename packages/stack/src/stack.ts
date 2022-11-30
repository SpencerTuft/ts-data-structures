import { Queue } from '@structure/queue'

export class Stack<T> extends Queue<T> {
  constructor () {
    super({ fifo: true })
  }
}
