import Component from '../component/pageComponent';

class FindPage extends Component{
  constructor() {
    super()
  }
  componentDidMount() {}
  render() {
    return `<div class="top-area"><div class="total">发现</div><div class="actions"><ul class="icons"><li class="icon icon-search"></li><li class="icon icon-add"></li></ul></div></div><div class="listView"><div class="session"><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">朋友圈</span> <i class="arrow-icon"></i></div></li></ul></div><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">视频号</span> <i class="arrow-icon"></i></div></li></ul></div><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">扫一扫</span> <i class="arrow-icon"></i></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">摇一摇</span> <i class="arrow-icon"></i></div></li></ul></div><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">看一看</span> <i class="arrow-icon"></i></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">搜一搜</span> <i class="arrow-icon"></i></div></li></ul></div><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">附近的人</span> <i class="arrow-icon"></i></div></li></ul></div><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">购物</span> <i class="arrow-icon"></i></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">游戏</span> <i class="arrow-icon"></i></div></li></ul></div><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">小程序</span> <i class="arrow-icon"></i></div></li></ul></div></div>`
  }
}

export default FindPage;