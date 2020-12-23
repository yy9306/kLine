import HomePage from './pages/homePage'
import Tab from './component/tab'
import './styles/index.css';

const a:number = 10;

const root: any = document.getElementById('root');

root.innerHTML = new HomePage().render();
const $main: any = document.querySelector('.main');
new Tab($main);
 
export default a;