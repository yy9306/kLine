import Component from '../component/pageComponent';
import IndexPage from '../common/index'
import LinkPage from '../common/link'
import FindPage from '../common/find'
import MyPage from '../common/my'
import ChatPage from './chatPage';
import Tab from '../component/tab';
class HomePage extends Component {
  public state: any;
  constructor() {
    super()
    
  }
  componentDidMount() {
    let $main: HTMLElement = document.querySelector('.main') as HTMLElement;
    new Tab($main);
  }
  componentWillUpdate() {}
  componentDidUpdate() {
    let $main: HTMLElement = document.querySelector('.main') as HTMLElement;
    setTimeout(() => {new Tab($main)}, 0)
    // new Tab($main);
  }
  jump() {
    const root: HTMLElement = document.getElementById('root') as HTMLElement;
    const chatPage = new ChatPage();
    chatPage.addNode(root);
  }
  render() {
    const indexPage = new IndexPage().render();
    const linkPage = new LinkPage().render();
    const findPage = new FindPage().render();
    const myPage = new MyPage().render();
    return  `<div class="main"><div class="content"><div class="home-page page page-0 slide-enter-right">${indexPage}</div><div class="link-page page page-1" style="display:none">${linkPage}</div><div class="find-page page page-2" style="display:none">${findPage}</div><div class="me-page page page-3" style="display:none">${myPage}</div></div>`;
  }
}

export default HomePage;