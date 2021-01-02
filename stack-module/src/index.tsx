import HomePage from './pages/homePage'
import './styles/index.css';

const root: HTMLElement = document.getElementById('root') as HTMLElement;

const homePage = new HomePage();

homePage.addNode(root);

export default {};
