interface ItemType{
  [key: string]: any
}

class Stack{
  private items: ItemType
  private length: number
  constructor() {
    this.items = {}
    this.length = 0;
  }
  push(node: string) {
    this.items[this.length] = node;
    this.length++
  }
  pop() {
    if (this.isEmpty()) {
      return null
    }
    this.length--
    const r: string = this.items[this.length]
    delete this.items[this.length]
    return r
  }
  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.items[this.length - 1]
  }
  isEmpty() {
    return this.length === 0;
  }
  clear() {
    this.items = {}
    this.length = 0
  }
}

export default Stack;





