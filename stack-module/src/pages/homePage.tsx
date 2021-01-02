import Component from '../component/pageComponent';
import ChatPage from './chatPage';
import Tab from '../component/tab';
class HomePage extends Component {
  public state: any;
  constructor() {
    super()
    this.state = {
      list: [
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
  mounted() {
    let $main: HTMLElement = document.querySelector('.main') as HTMLElement;
    new Tab($main);
  }
  jump() {
    const root: HTMLElement = document.getElementById('root') as HTMLElement;
    const chatPage = new ChatPage();
    chatPage.addNode(root);
  }
  render() {
    let listView: string = '';
    this.state.list.forEach(item => {
      listView += `<li class="list listJump" data-click={jump("listJump")}><div class="avatar"></div><div class="context"><div class="top"><span class="name">${item.title}</span> <span class="date">${item.dateTime}</span></div><p class="information">${item.context}</p></div></li>`
    })
    console.log(listView)
    return  `<div class="main"><div class="content"><div class="home-page page page-0 slide-enter-right"><div class="top-area"><div class="total">微信（500）</div><div class="actions"><ul class="icons"><li class="icon icon-search"></li><li class="icon icon-add"></li></ul></div></div><div class="list-view router"><ul class="lists">${listView}</ul></div>
    </div><div class="link-page page page-1" style="display:none"><div class="top-area"><div class="total">通讯录</div><div class="actions"><ul class="icons"><li class="icon icon-search"></li><li class="icon icon-add"></li></ul></div></div><div class="listView"><div class="session"><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">新的朋友</span></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">群聊</span></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">标签</span></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">公众号</span></div></li></ul></div><div class="session"><div class="headline">A</div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">标签</span></div></li></ul></div></div></div><div class="find-page page page-2" style="display:none"><div class="top-area"><div class="total">发现</div><div class="actions"><ul class="icons"><li class="icon icon-search"></li><li class="icon icon-add"></li></ul></div></div><div class="listView"><div class="session"><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">朋友圈</span> <i class="arrow-icon"></i></div></li></ul></div><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">视频号</span> <i class="arrow-icon"></i></div></li></ul></div><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">扫一扫</span> <i class="arrow-icon"></i></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">摇一摇</span> <i class="arrow-icon"></i></div></li></ul></div><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">看一看</span> <i class="arrow-icon"></i></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">搜一搜</span> <i class="arrow-icon"></i></div></li></ul></div><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">附近的人</span> <i class="arrow-icon"></i></div></li></ul></div><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">购物</span> <i class="arrow-icon"></i></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">游戏</span> <i class="arrow-icon"></i></div></li></ul></div><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">小程序</span> <i class="arrow-icon"></i></div></li></ul></div></div></div><div class="me-page page page-3" style="display:none"><div class="top-areas"><i class="icon-camera"></i><div class="personal-wrapper"><div class="avatar"><img class="avatar-img" alt="" width="100%" height="100%"></div><div class="context"><h3 class="nick-name">军哥哥</h3><div class="person-wx-info"><p class="wx-id">微信号： wx-8888</p><div class="code-img-wrapper"><img class="code-img" src="./images/code-icon.png" alt=""> <i class="icon-arrow"></i></div></div></div></div></div><div class="listView"><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">支付</span> <i class="arrow-icon"></i></div></li></ul></div><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">收藏</span> <i class="arrow-icon"></i></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">相册</span> <i class="arrow-icon"></i></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">卡包</span> <i class="arrow-icon"></i></div></li><li class="list"><div class="avatar"></div><div class="context"><span class="name">表情</span> <i class="arrow-icon"></i></div></li></ul></div><div class="session"><div class="split-line"></div><ul class="lists"><li class="list"><div class="avatar"></div><div class="context"><span class="name">设置</span> <i class="arrow-icon"></i></div></li></ul></div></div></div></div><div class="footer tabs-wrapper"><div class="tabs"><div class="tab" data-index="0"><i class="icon icon-wx"></i> <span class="text">微信</span></div><div class="tab" data-index="1"><i class="icon icon-book"></i> <span class="text">通讯录</span></div><div class="tab" data-index="2"><i class="icon icon-find"></i> <span class="text">发现</span></div><div class="tab" data-index="3"><i class="icon icon-me"></i> <span class="text">我</span></div></div></div></div>`;
  }
}

export default HomePage;