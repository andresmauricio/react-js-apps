import { useState } from 'react';
import { products as initialProduct } from '../mocks/products';
import { Cart } from './components/Cart';
import { Navbar } from './components/Navbar';
import ProductList from './components/ProductList';

export function App() {
  const [products, setProducts] = useState(initialProduct);
  const [cart, setCart] = useState([]);
  return (
    <>
      <Navbar count={cart.length} />
      <ProductList
        products={products as any}
        cart={cart as any}
        setCart={setCart as any}
      ></ProductList>
      <Cart products={cart} setCart={setCart as any} />
    </>
  );
}

export default App;
