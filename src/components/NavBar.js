import { NavLink } from 'react-router-dom';
import item from './assets/item.png';
import itemi from './assets/itemi.png';
import './NavBar.css';

const NavBar = () => (
  <nav>
    <div>
      <h1> ERYPTO </h1>
    </div>
    <div>
      <NavLink to="/"><h5>HOME</h5></NavLink>
    </div>
    <div>
      <img src={item} alt="setting" />
      <img src={itemi} alt="speaker" />
    </div>
  </nav>
);

export default NavBar;
