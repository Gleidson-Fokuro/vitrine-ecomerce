import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import Container from '../components/Container';
import ProductCardControls from '../components/ProductCardControls';
import products from '../data/products';
import '../css/Product.css';

const Product = (props) => {
  const { cart, addToCart, removeFromCart } = props;
  const params = useParams();
  const prodId = params.productId;

  let quantity = 0;
  let product = false;

  if (products.some((p) => `${p.id}` === prodId)) {
    if (cart.some((p) => `${p.id}` === prodId)) {
      quantity = cart.filter((p) => `${p.id}` === prodId)[0].quantity;
    }

    product = products.filter((p) => `${p.id}` === prodId)[0];
  }

  return (
    <section id='product-page'>
      {product === false ? (
        <h2 className='message-404'>Produto não encontrado</h2>
      ) : (
        <Container>
          <div>
            <Card>
              <img src={product.img} alt={product.name} />
            </Card>
          </div>
          <div className='content'>
            <Card classes={['title']}>
              <h2>{product.name}</h2>
              <p>$ {product.price.toFixed(2)}</p>
            </Card>

            <Card classes={['description']}>
              <p>Descrição:</p>
              <p>
                {product.description === ''
                  ? 'No description provided'
                  : product.description}
              </p>
            </Card>
            <ProductCardControls
              counter={quantity}
              full={true}
              addBtn={() => addToCart(product)}
              removeBtn={() => removeFromCart(product)}
            />
          </div>
        </Container>
      )}
    </section>
  );
};

export default Product;
