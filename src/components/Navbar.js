import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = (props) => {
  const { cart } = props;
  const count = cart.reduce((a, b) => a + b.quantity, 0);
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <NavLink to='/products'>Produtos</NavLink>
        </li>
        <li>
          <NavLink to='/cart'>Carrinho {count > 0 ? `[${count}]` : null}</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
