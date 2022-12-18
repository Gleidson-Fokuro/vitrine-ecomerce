import Container from './Container';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = (props) => {
  return (
    <header>
      <Container>
        <Link to='/'>
          <h1>Descom-Shop</h1>
        </Link>
        <Navbar cart={props.cart} />
      </Container>
    </header>
  );
};

export default Header;
