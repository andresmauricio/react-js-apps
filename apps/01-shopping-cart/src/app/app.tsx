import { useState } from 'react';
import { products as initialProduct } from '../mocks/products';
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
    </>
  );
}

export default App;
