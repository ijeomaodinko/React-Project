import { NavLink } from 'react-router-dom';
import item from './assets/item.jpeg';
import itemi from './assets/itemi.png';

const NavBar = () => (
  <nav>
    <div>
      <h1> Weather Forecast </h1>
      <NavLink to="/"><h2>HOME</h2></NavLink>
    </div>
    <div>
      <img src={item} alt="setting" />
      <img src={itemi} alt="speaker" />
    </div>
  </nav>
);

export default NavBar;
