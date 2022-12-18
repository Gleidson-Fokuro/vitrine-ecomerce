import Container from '../components/Container';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import '../css/Products.css';

const Products = (props) => {
  const { addToCart, removeFromCart, cart } = props;
  return (
    <section id='products-page'>
      <Container>
        <h2>Produtos</h2>
        <div className='products-list'>
          {products.map((product) => {
            return (
              <ProductCard
                product={product}
                key={product.id}
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                hasLink={true}
                link={`products/${product.id}`}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Products;
