import HomePage from './pages/homePage'
import './styles/index.css';

const a:number = 10;

const root: any = document.getElementById('root');

// console.log(new HomePage().render())
root.innerHTML = new HomePage().render();
 
export default a;