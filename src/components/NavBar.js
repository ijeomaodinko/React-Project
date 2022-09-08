import { NavLink } from 'react-router-dom';
import item from './assets/item.png';
import itemi from './assets/itemi.png';
import './NavBar.css';

const NavBar = () => (
  <nav>
    <div>
      <h1> ERYPTO </h1>
      <NavLink to="/"><h2>HOME</h2></NavLink>
    </div>
    <div>
      <img src={item} alt="setting" />
      <img src={itemi} alt="speaker" />
    </div>
  </nav>
);

export default NavBar;
