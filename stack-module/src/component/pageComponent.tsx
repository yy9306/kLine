
import stack from './stack'
class Component{
  public stackContainer: any
  public root: HTMLElement
  public state: any
  constructor() {
    this.stackContainer = stack();
    this.root = document.getElementById('root') as HTMLElement;
    this.state = {}
  }
  componentDidMount() {
    console.log('这里不实现具体的方法');
  }
  componentWillUpdate() {
    console.log('数据更新前调用')
  }
  componentDidUpdate() {
    console.log('数据更新成功调用')
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
    this.componentDidMount()
    this.handleMethods(nodeStr);
    
  }
  // 更新state
  setState(nextState) {
    this.componentWillUpdate()
    const preState = this.state;
    this.state = {
      ...preState,
      ...nextState,
    };
    this.removeCurrentNode();
    const nodeStr:string = this.render();
    let childLists: NodeListOf<HTMLElement> = this.root.childNodes as NodeListOf<HTMLElement>;
    const len = childLists.length;
    const currentNode: HTMLElement = childLists[len - 1] as HTMLElement;
    if (childLists.length <= 0) {
      this.root.innerHTML = nodeStr as string 
    } else {
      this.addClass(currentNode, 'slide-leave-left');
      currentNode.insertAdjacentHTML('afterend', nodeStr);
      currentNode.addEventListener('animationend', () => {
      })
    }
    this.stackContainer.push(nodeStr);
    this.componentDidUpdate()
    this.handleMethods(nodeStr);
  }
  removeCurrentNode() {
    let childLists: NodeListOf<HTMLElement> = this.root.childNodes as NodeListOf<HTMLElement>;
    const len = childLists.length;
    const currentNode: HTMLElement = childLists[len - 1] as HTMLElement;
    console.log(currentNode)
    this.removeClass(currentNode);
    this.addClass(currentNode, 'slide-leave-right');
    currentNode.addEventListener('animationend', () => {
      childLists[len - 1].remove();
      this.stackContainer.pop();
    })
  }
  removeNode() {
    let childLists: NodeListOf<HTMLElement> = this.root.childNodes as NodeListOf<HTMLElement>;
    const len = childLists.length;
    const currentNode: HTMLElement = childLists[len - 1] as HTMLElement;
    const nextNode: HTMLElement = childLists[len - 2] as HTMLElement;
    this.removeClass(currentNode, nextNode);
    this.addClass(currentNode, 'slide-leave-right');
    this.addClass(nextNode, 'slide-enter-left');
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
        document.querySelectorAll(`.${args[2]}`) && document.querySelectorAll(`.${args[2]}`).forEach(item => {
          item.addEventListener("click", () => _that[args[1]]())
        })
        return ''
      })
    })
  }
  render() {
    return ''
  }
}

export default Component;