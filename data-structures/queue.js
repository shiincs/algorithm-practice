class Queue {
  constructor() {
    this.items = []
  }

  enqueue(element) {
    return this.items.push(element)
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0]
  }

  isEmpty() {
    return this.items.length === 0
  }

  clear() {
    return this.items = []
  }

  size() {
    return this.items.length;
  }

  print() {
    return this.items.join('')
  }
}

const q = new Queue();

q.enqueue(3)
q.enqueue(5)

console.log(q)

q.dequeue()

console.log(q)