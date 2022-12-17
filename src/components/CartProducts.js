import ProductCard from '../components/ProductCard';
import '../css/CartProducts.css';

const CartProducts = (props) => {
  const { cart, addToCart, removeFromCart } = props;
  return (
    <div className='cart-products'>
      {cart.map((prod) => (
        <ProductCard
          addToCart={addToCart}
          cart={cart}
          fullControls={true}
          horizontal={true}
          key={prod.id}
          product={prod}
          removeFromCart={removeFromCart}
          total={true}
        />
      ))}
    </div>
  );
};

export default CartProducts;
