import React from 'react';
import { Product } from './Product';

interface ProductListProps {
  products: [];
  cart: [];
  setCart: (newProduct: any[]) => void;
}

function ProductList({ products, cart, setCart }: ProductListProps) {
  const addProduct = (product: any) => {
    const newProduct = { ...product, count: 1 };
    const haveProduct = cart.find((item: any) => item.id === newProduct.id);
    if (haveProduct) {
      const addCountCart = cart.map((item: any) => ({
        ...item,
        count: item.id === newProduct.id ? item.count + 1 : item.count,
      }));
      setCart(addCountCart);
      return;
    }
    setCart([...cart, newProduct]);
  };

  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map((product: any) => (
        <Product product={product} key={product.id} addProduct={addProduct} />
      ))}
    </div>
  );
}

export default ProductList;
