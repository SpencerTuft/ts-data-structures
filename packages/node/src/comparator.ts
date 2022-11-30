export class Comparator<T> {
  constructor (public compare: (a: T, b: T) => number) { }

  equal (a: T, b: T): boolean {
    return this.compare(a, b) === 0
  }

  lessThan (a: T, b: T): boolean {
    return this.compare(a, b) < 0
  }

  greaterThan (a: T, b: T): boolean {
    return this.compare(a, b) > 0
  }

  lessThanOrEqual (a: T, b: T): boolean {
    return this.lessThan(a, b) || this.equal(a, b)
  }

  greaterThanOrEqual (a: T, b: T): boolean {
    return this.greaterThan(a, b) || this.equal(a, b)
  }
}
