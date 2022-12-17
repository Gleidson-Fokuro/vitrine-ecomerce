import { Link } from 'react-router-dom';
import '../css/CartNoProductsMsg.css';

const CartNoProductsMsg = () => {
  return (
    <div className='cart-no-products'>
      <h3>Você ainda não adicionou nenhum item ao seu carrinho de compras</h3>
      <Link to='/products'>Confira nossos produtos</Link>
    </div>
  );
};

export default CartNoProductsMsg;
