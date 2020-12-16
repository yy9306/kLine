class Tab{
  public tabs: HTMLDivElement
  public tab: Array<HTMLDivElement>
  public contentView: any
  public content: any
  public activeIndex: number
  static isClick: Boolean = true;
  constructor(ele: any, activeIndex = 0) {
    this.tabs = ele.querySelector('.tabs-wrapper');
    this.tab = this.tabs.querySelectorAll('.tab');
    this.contentView = ele.querySelector('.content');
    this.content = this.contentView.querySelectorAll('.page');
    this.activeIndex = activeIndex;
    this.init();
  }
  init() {
    this.tab[this.activeIndex].classList.add('active');
    this.tabs.addEventListener('click', this.handleClick.bind(this));
  }
  handleClick(e: any) {
      this.switchTab(e.target.dataset.index);
  }
  _handleClass(dom: any) {
    const reg = /(\s*)slide-.+?(\s|$)/g;

    return dom.replace(reg, '');
  }
  switchTab(i: number) {
    if (i === this.activeIndex) return;

    if (!Tab.isClick) return;
    Tab.isClick = false; // 控制点击
    this.tab[this.activeIndex].classList.remove('active');
    this.tab[i].classList.add('active');
    // 判断进入和离开方向
    if (i > this.activeIndex) {
      this.content[this.activeIndex].classList.add('slide-leave-left');
      this.content[i].classList.add('slide-enter-right');
      this.content[i].style.display = 'block';
    } else {
      this.content[this.activeIndex].classList.add('slide-leave-right');
      this.content[i].classList.add('slide-enter-left');
      this.content[i].style.display = 'block';
    }
    setTimeout(() => {
      let currentClassName = this.content[this.activeIndex].className;
      let nextClassName = this.content[i].className;
      this.content[this.activeIndex].className = this._handleClass(currentClassName);
      this.content[i].className = this._handleClass(nextClassName);
      this.content[this.activeIndex].style.display = 'none';
      Tab.isClick = true;
      this.activeIndex = i;
    }, 400)
  }
}

export default Tab;