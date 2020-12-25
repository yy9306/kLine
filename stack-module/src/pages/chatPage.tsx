import Component from '../component/pageComponent';

class ChatPage extends Component{
  constructor() {
    super()
  }
  mounted() {

  }
  back() {
    this.removeNode()
  }
  render() {
    return (`<div class="chat-page page slide-enter-right"><div class="top-areas"><div class="leading"><i class="icon-back" onClick={back("icon-back")}></i> <span class="nick-name">金三胖</span></div><div class="actions"><i class="icon-more">···</i></div></div><div class="listView"><ul class="lists"><li class="list"><div class="avatar"><img src="./images/avatar.jpg" alt="" width="100%" height="100%"></div><div class="context"><span class="send-message">跟着波波老师学思维 </span><i class="icon-triangle"></i></div></li></ul></div><div class="chat-footer"><i class="icon icon-voice"></i><div class="input-wrapper"><input type="text"></div><div class="right-icons"><i class="icon icon-smile"></i> <i class="icon icon-add"></i></div></div></div>`)
  }
}
export default ChatPage;