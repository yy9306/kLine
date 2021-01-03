import Component from '../component/pageComponent';

class IndexPage extends Component{
  constructor() {
    super()
    this.state = {
      lists: [
        {
          title: '核心进阶',
          context: '事件循环',
          dateTime: '昨天'
        },
        {
          title: '核心进阶',
          context: '高阶函数',
          dateTime: '昨天'
        },
      ]
    }
  }
  componentDidMount() {}
  add() {
    const list = {title: '核心进阶', context: '设计模式', dateTime: '今天'};
    this.setState({
      lists: [...this.state.lists, list]
    })
  }
  render() {
    let listView: string = '';
    this.state.lists.forEach(item => {
      listView += `<li class="list listJump" data-click={jump("listJump")}><div class="avatar"></div><div class="context"><div class="top"><span class="name">${item.title}</span> <span class="date">${item.dateTime}</span></div><p class="information">${item.context}</p></div></li>`
    })
    return `<div class="top-area"><div class="total">微信（500）</div><div class="actions"><ul class="icons"><li class="icon icon-search"></li><li class="icon icon-add"></li></ul></div></div><div class="list-view router"><ul class="lists">${listView}</ul><div class="add" data-click={add("add")}>添加</div></div>`
  }
}

export default IndexPage;