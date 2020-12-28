
import stack from './stack'
class Component{
  public stackContainer: any
  public root: HTMLElement
  constructor() {
    this.stackContainer = stack();
    this.root = document.getElementById('root') as HTMLElement;
  }
  mounted() {
    console.log('这里不实现具体的方法');
  }
  addNode(root: HTMLElement) {
    const nodeStr:string = this.render();
    let childLists: NodeListOf<HTMLElement> = this.root.childNodes as NodeListOf<HTMLElement>;
    const len = childLists.length;
    const currentNode: HTMLElement = childLists[len - 1] as HTMLElement;
    if (childLists.length <= 0) {
      root.innerHTML = nodeStr as string 
    } else {
      this.addClass(currentNode, 'slide-leave-left');
      currentNode.insertAdjacentHTML('afterend', nodeStr);
      currentNode.addEventListener('animationend', () => {
      })
    }
    this.stackContainer.push(nodeStr);
    this.mounted()
    this.handleMethods(nodeStr);
    
  }
  removeNode() {
    let childLists: NodeListOf<HTMLElement> = this.root.childNodes as NodeListOf<HTMLElement>;
    const len = childLists.length;
    const currentNode: HTMLElement = childLists[len - 1] as HTMLElement;
    const nextNode: HTMLElement = childLists[len - 2] as HTMLElement;
    this.removeClass(currentNode, nextNode);
    this.addClass(currentNode, 'slide-leave-right');
    this.addClass(nextNode, 'slide-enter-left');
    // nextNode.style.display = 'block';
    currentNode.addEventListener('animationend', () => {
      childLists[len - 1].remove();
      this.stackContainer.pop();
    })
  }
  removeClass(...nodes: any) {  
    nodes.forEach((item: any) => {
      const classes: string = (item as HTMLElement).getAttribute('class') as string;
      if (classes.includes('slide')) {
        (item as HTMLElement).setAttribute('class', classes.replace(/(\s*)slide-.+?(\s|$)/g, ''));
      }
    });
  }
  addClass(node: HTMLElement, className: string) {
    (node as HTMLElement).classList.add(className)
  }
  handleMethods(nodeStr: string) {
    const _that = this;
    let methods: Array<string>;
    const reg = /data-click=\{.+\}/g;
    methods = nodeStr.match(reg) as string[];
    methods && methods.forEach(item => {
      item.replace(/.+\{(\w+).+\"([\w\_\-]+)\".+/g, function(...args: string[]) {
        (document.querySelector(`.${args[2]}`)) &&  (document.querySelector(`.${args[2]}`) as HTMLElement).addEventListener("click", () => _that[args[1]]())
        return ''
      })
    })
  }
  render() {
    return ''
  }
}

export default Component;