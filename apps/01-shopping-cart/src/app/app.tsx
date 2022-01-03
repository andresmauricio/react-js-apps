import { useState } from 'react';
import { products as initialProduct } from '../mocks/products';
import { Cart } from './components/Cart';
import { Navbar } from './components/Navbar';
import ProductList from './components/ProductList';
import './app.css';

export function App() {
  const [products, setProducts] = useState(initialProduct);
  const [cart, setCart] = useState([]);
  return (
    <>
      <Navbar count={cart.length} />
      <section className="container">
        <ProductList
          products={products as any}
          cart={cart as any}
          setCart={setCart as any}
        ></ProductList>
        <Cart products={cart} setCart={setCart as any} />
      </section>
    </>
  );
}

export default App;
