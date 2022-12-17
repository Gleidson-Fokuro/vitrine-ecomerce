import Card from './Card';
import ProductCardControls from './ProductCardControls';
import ProductNamePrice from './ProductNamePrice';
import '../css/ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  const {
    product,
    total = false,
    addToCart,
    horizontal = false,
    fullControls = false,
    removeFromCart,
    cart,
    hasLink = false,
    link = '',
  } = props;

  const getQuantity = (id) => {
    if (cart.some((item) => item.id === id)) {
      return cart.filter((item) => item.id === id)[0].quantity;
    }
    return 0;
  };

  const cssClasses = ['product-card', horizontal ? 'horizontal' : null];

  const productImage = hasLink ? (
    <Link to={link}>
      <img src={product.img} alt={product.name} />
    </Link>
  ) : (
    <img src={product.img} alt={product.name} />
  );

  const nameAndPrice = total ? (
    <ProductNamePrice
      name={product.name}
      price={product.price * getQuantity(product.id)}
      hasLink={hasLink}
      link={link}
    />
  ) : (
    <ProductNamePrice
      name={product.name}
      price={product.price}
      hasLink={hasLink}
      link={link}
    />
  );

  const cardControls = (
    <ProductCardControls
      addBtn={() => addToCart(product)}
      removeBtn={() => removeFromCart(product)}
      counter={getQuantity(product.id)}
      full={fullControls}
    />
  );

  return (
    <Card classes={cssClasses}>
      {productImage}
      <div className='bottom'>
        {nameAndPrice}
        {cardControls}
      </div>
    </Card>
  );
};

export default ProductCard;
