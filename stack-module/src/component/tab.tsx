class Tab{
  public tabs: HTMLElement
  public tab: NodeListOf<HTMLElement>
  public contentView: HTMLElement
  public content: NodeListOf<HTMLElement>
  public activeIndex: number
  static isClick: Boolean = true;
  constructor(ele: HTMLElement, activeIndex = 0) {
    this.tabs = ele.querySelector('.tabs-wrapper') as HTMLElement;
    this.tab = this.tabs.querySelectorAll('.tab');
    this.contentView = ele.querySelector('.content') as HTMLElement;
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
  _handleClass(dom: string): string {
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
    // let _that = this;
    // this.content[this.activeIndex].addEventListener('animationend', function(e) {
    //   if(e.target === e.currentTarget && !Tab.isClick) {
    //     let currentClassName: string = _that.content[_that.activeIndex].className;
    //     let nextClassName: string = _that.content[i].className;
    //     _that.content[_that.activeIndex].className = _that._handleClass(currentClassName);
    //     _that.content[i].className = _that._handleClass(nextClassName);
    //     _that.content[_that.activeIndex].style.display = 'none';
    //     _that.activeIndex = i;
    //     Tab.isClick = true
    //   }
    // });
    setTimeout(() => {
      let currentClassName: string = this.content[this.activeIndex].className;
      let nextClassName: string = this.content[i].className;
      this.content[this.activeIndex].className = this._handleClass(currentClassName);
      this.content[i].className = this._handleClass(nextClassName);
      this.content[this.activeIndex].style.display = 'none';
      Tab.isClick = true;
      this.activeIndex = i;
    }, 400)
  }
}

export default Tab;