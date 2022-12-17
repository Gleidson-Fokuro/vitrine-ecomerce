import HomeCarousel from '../components/HomeCarousel';
import ProductsHomeSection from '../components/ProductsHomeSection';

const Home = (props) => {
  const { addToCart, cart } = props;
  return (
    <section>
      <HomeCarousel />
      <ProductsHomeSection addToCart={addToCart} cart={cart} />
    </section>
  );
};

export default Home;
