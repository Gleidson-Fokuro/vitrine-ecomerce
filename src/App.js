import 'normalize.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import Product from './pages/Product';
import Products from './pages/Products';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      if (prevCart.some((item) => item.id === product.id)) {
        return prevCart.map((item) => {
          if (item.id === product.id) {
            const newItem = { ...item };
            newItem.quantity++;
            return newItem;
          }
          return item;
        });
      } else {
        product.quantity = 1;
        return [product, ...prevCart];
      }
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const newCart = prevCart.map((item) => {
        if (item.id === product.id) {
          const newItem = { ...item };
          newItem.quantity--;
          return newItem;
        }
        return item;
      });
      return newCart.filter((item) => item.quantity > 0);
    });
  };

  const homePage = <Home addToCart={addToCart} cart={cart} />;
  const productsPage = (
    <Products
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      cart={cart}
    />
  );
  const productPage = (
    <Product
      cart={cart}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
    />
  );
  const cartPage = (
    <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
  );

  return (
    <>
      <Header cart={cart} />
      <main>
        <Routes>
          <Route index element={homePage} />
          <Route path='products' element={productsPage} />
          <Route path='products/:productId' element={productPage} />
          <Route path='cart' element={cartPage} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
