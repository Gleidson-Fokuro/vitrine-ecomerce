import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/CartInfoPanel.css';

const CartInfoPanel = (props) => {
  const { cart } = props;
  const total = cart.reduce((a, b) => a + b.price * b.quantity, 0);
  return (
    <div className='cart-info-panel'>
      <div className='total'>
        <span>Total:</span>
        <p>R$ {total.toFixed(2)}</p>
      </div>
      {cart.length > 0 ? (
        <button title='Continue'>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      ) : null}
    </div>
  );
};

export default CartInfoPanel;
