import CartInfoPanel from '../components/CartInfoPanel';
import CartNoProductsMsg from '../components/CartNoProductsMsg';
import CartProducts from '../components/CartProducts';
import Container from '../components/Container';
import '../css/Cart.css';

const Cart = (props) => {
  const { cart, addToCart, removeFromCart } = props;
  return (
    <section id='cart'>
      <Container>
        <h2>Cart</h2>
        {cart.length > 0 ? <CartInfoPanel cart={cart} /> : null}

        {cart.length === 0 ? (
          <CartNoProductsMsg />
        ) : (
          <CartProducts
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        )}
      </Container>
    </section>
  );
};

export default Cart;
