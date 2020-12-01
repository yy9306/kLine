class RouterStack{
  constructor() {
    this._i = Symbol('routerStack')
    this[this._i] = {}
    this.length = 0;
  }
  push(node) {
    this[this._i][this.length] = node;
    this.length++
  }
  pop() {
    if (this.isEmpty()) {
      return null
    }
    this.length--
    const r = this[this._i][this.length]
    delete this[this._i][this.length]
    return r
  }
  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this[this._i][this.length - 1]
  }
  isEmpty() {
    return this.length === 0;
  }
  clear() {
    this[this._i] = {}
    this.length = 0
  }
}

class Node {
  constructor(node) {
    this.node = node
  }
}

function stackFactory() {
  return new RouterStack();
}
function nodeFactory(node) {
  return new Node(node)
}

$(function() {
  let currentIndex = 0;
  const $home = $('.home-page');
  const $link = $('.link-page');
  const $find = $('.find-page');
  const $me = $('.me-page');
  const $chat = $('.chat-page');
  const $main = $('.main');
  const nodes = [$home, $link, $find, $me, $main];
  const stacks = {};
  handleStacks(currentIndex);
  // tab 切换
  $('.footer').on('click', '.tab', function() {
    const index = $(this).index();
    if (index === currentIndex) return;
    handleStacks(index);
    const switchStack = getStackNode(index);
    const currentStack = getStackNode(currentIndex);
    switchStack.css('display', 'block');
    if (index > currentIndex) {
      addClass(currentStack, 'slide-leave-left');
      addClass(switchStack, 'slide-enter-right');
    } else {
      addClass(currentStack, 'slide-leave-right');
      addClass(switchStack, 'slide-enter-left');
    }
    setTimeout(() => {
      currentStack.css('display', 'none');
      removeClass(currentStack, switchStack)
      currentIndex = index;
    }, 500)
  })

  $('.router').on('click', '.list', function() {
    const index = 0;
    const total = nodes.length - 1;
    handleStacks(index, $chat);
    handleStacks(total);
    const switchStack = getStackNode(index);
    const currentStack = getStackNode(total);
    removeClass(currentStack, switchStack)
    addClass(currentStack, 'slide-leave-left');
    addClass(switchStack, 'slide-enter-right');
    switchStack.css('display', 'block');
  })

  $('.icon-back').on('click', function() {
    const index = 0;
    const total = nodes.length - 1;
    const switchStack = getStackNode(index);
    const currentStack = getStackNode(total);
    removeClass(currentStack, switchStack);
    addClass(currentStack, 'slide-enter-left');
    addClass(switchStack, 'slide-leave-right');
    setTimeout(() => {
      switchStack.css('display', 'none');
      stacks[`stack${index}`].pop();
    }, 500);
  })

  //往栈里添加数据
  function handleStacks(index, node) {
    const key = `stack${index}`;
    if (stacks[key] === undefined) {
      stacks[key] = stackFactory();
    }
    node = node || nodes[index];
    stacks[key].push(nodeFactory(node))
  }

  // 获取栈里面node元素
  function getStackNode(index) {
    return stacks[`stack${index}`].peek().node;
  }

  // 移除样式
  function removeClass(...nodes) {  
    let allNodes = [];
    for (let i = 0, len = nodes.length; i < len; i++) {
      allNodes.push(...Array.from(nodes[i]))
    }
    allNodes.forEach(item => {
      const classes = $(item).attr('class')
      if (classes.includes('slide')) {
        $(item).attr('class', classes.replace(/(\s*)slide-.+?(\s|$)/g, ''))
      }
    });
  }
  // 添加样式
  function addClass(node, className) {
    node.addClass(className)
  }
});





