import '../css/ProductNamePrice.css';
import { Link } from 'react-router-dom';

const ProductNamePrice = (props) => {
  const {
    name = 'Product name',
    price = 0.0,
    hasLink = false,
    link = '',
  } = props;
  return (
    <div className='name-price'>
      <h3>{hasLink ? <Link to={link}>{name}</Link> : name}</h3>
      <p>R$ {price.toFixed(2)}</p>
    </div>
  );
};

export default ProductNamePrice;
