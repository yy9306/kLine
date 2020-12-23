import Component from '../component/pageComponent';

class HomePage extends Component{
  constructor() {
    super()
    this.render();
  }
  render() {
    return (`<div class="chat-page page slide-enter-right" style="display:none"><div class="top-areas"><div class="leading"><i class="icon-back"></i> <span class="nick-name">金三胖</span></div><div class="actions"><i class="icon-more">···</i></div></div><div class="listView"><ul class="lists"><li class="list"><div class="avatar"><img src="./images/avatar.jpg" alt="" width="100%" height="100%"></div><div class="context"><span class="send-message">跟着波波老师学思维 </span><i class="icon-triangle"></i></div></li></ul></div><div class="chat-footer"><i class="icon icon-voice"></i><div class="input-wrapper"><input type="text"></div><div class="right-icons"><i class="icon icon-smile"></i> <i class="icon icon-add"></i></div></div></div>`)
  }
}