
import stack from './stack'
class Component{
  public stackContainer: any
  constructor() {
    this.stackContainer = stack();
  }
  mounted() {
    console.log('这里不实现具体的方法');
  }
  addNode(root: HTMLElement) {
    const nodeStr:string = this.render();
    let childLists = root.childNodes;
    if (childLists.length <= 0) {
      root.innerHTML = nodeStr as string 
    }
    console.log(childLists[childLists.length - 1])
    this.stackContainer.push(nodeStr);
    this.mounted()
    this.handleMethods(nodeStr);
  }
  removeNode() {
    this.stackContainer.pop()
  }
  handleMethods(nodeStr: string) {
    const _that = this;
    let methods: Array<string>;
    const reg = /onClick=\{.+\}/g;
    methods = nodeStr.match(reg) as string[];
    methods && methods.forEach(item => {
      item.replace(/.+\{(\w+).+\"([\w\_\-]+)\".+/g, function(...args: string[]) {
        document.getElementsByClassName(args[2])[0].addEventListener('click', () => { _that[args[1]]()});
        return ''
      })
    })
  }
  render() {
    return ''
  }
}

export default Component;