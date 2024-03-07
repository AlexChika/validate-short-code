const que = Symbol("que");
const frontIdx = Symbol("frontIdx");
const backIdx = Symbol("index");

class Queue {
  constructor() {
    this[que] = {};
    this[frontIdx] = 0;
    this[backIdx] = 0;
  }

  enqueue(item) {
    if (this[frontIdx] === 0) {
      this[frontIdx]++;
      this[backIdx]++;
    } else {
      this[backIdx]++;
    }

    this[que][this[backIdx]] = item;
  }

  dequeue() {
    if (this.length() < 1) return;

    delete this[que][this[frontIdx]];
    this[frontIdx]++;

    if (this.length() === 0) {
      this[frontIdx] = 0;
      this[backIdx] = 0;
    }
  }

  length() {
    return Object.keys(this[que]).length;
  }

  isEmpty() {
    return this.length() < 1;
  }

  back() {
    return this[que][this[backIdx]] || null;
  }

  front() {
    return this[que][this[frontIdx]] || null;
  }
}

export { Queue };
