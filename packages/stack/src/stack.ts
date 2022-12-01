import { Queue } from '@oaspub/queue'

export class Stack<T> extends Queue<T> {
  constructor () {
    super({ fifo: true })
  }
}
