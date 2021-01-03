import Component from '../component/pageComponent';

class LinkPage extends Component{
  constructor() {
    super()
  }
  componentDidMount() {}
  render() {
    return `<div class="top-area"><div class="total">通讯录</div><div class="actions"><ul class="icons"><li class="icon icon-search"></li><li class="icon icon-add"></li></ul></div></div><div class="listView"><div class="session"><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">新的朋友</span></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">群聊</span></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">标签</span></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">公众号</span></div></li></ul></div><div class="session"><div class="headline">A</div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">标签</span></div></li></ul></div></div>`
  }
}

export default LinkPage;