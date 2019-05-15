/* 스택 자료구조 */
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    return this.items.push(element)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  clear() {
    return this.items = []
  }

  size() {
    return this.items.length
  }

  print() {
    return this.items.join('')
  }
}

const a = new Stack();

console.log(a.size())
a.push(5)
a.push(8)
console.log(a.print())

console.log(a.peek())
a.clear()