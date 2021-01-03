import Component from '../component/pageComponent';

class MyPage extends Component{
  constructor() {
    super()
  }
  componentDidMount() {}
  render() {
    return `<div class="top-areas"><i class="icon-camera"></i><div class="personal-wrapper"><div class="avatar"><img class="avatar-img" alt="" width="100%" height="100%"></div><div class="context"><h3 class="nick-name">军哥哥</h3><div class="person-wx-info"><p class="wx-id">微信号： wx-8888</p><div class="code-img-wrapper"><img class="code-img" src="./images/code-icon.png" alt=""> <i class="icon-arrow"></i></div></div></div></div></div><div class="listView"><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">支付</span> <i class="arrow-icon"></i></div></li></ul></div><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">收藏</span> <i class="arrow-icon"></i></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">相册</span> <i class="arrow-icon"></i></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">卡包</span> <i class="arrow-icon"></i></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">表情</span> <i class="arrow-icon"></i></div></li></ul></div><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">设置</span> <i class="arrow-icon"></i></div></li></ul></div></div></div></div><div class="footer tabs-wrapper"><div class="tabs"><div class="tab" data-index="0"><i class="icon icon-wx"></i> <span class="text">微信</span></div><div class="tab" data-index="1"><i class="icon icon-book"></i> <span class="text">通讯录</span></div><div class="tab" data-index="2"><i class="icon icon-find"></i> <span class="text">发现</span></div><div class="tab" data-index="3"><i class="icon icon-me"></i> <span class="text">我</span></div></div>`
  }
}

export default MyPage;