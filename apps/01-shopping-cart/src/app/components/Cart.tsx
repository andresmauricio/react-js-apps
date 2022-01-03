export const Cart = ({ products, setCart }: any) => {
  const deleteProduct = (id: string) => {
    const cart = products.filter((item: any) => item.id !== id);
    setCart(cart);
  };

  return (
    <div className="card-list">
      <h2>Cart</h2>
      {products.map((product: any, index: number) => (
        <article className="card" key={index}>
          <p>Name: {product.name}</p>
          <span>
            price: {product.price} - count: {product.count}
          </span>
          <p>Total: {product.price * product.count} </p>
          <button
            className="btn-delete"
            onClick={() => deleteProduct(product.id)}
          >
            Delete product
          </button>
        </article>
      ))}
    </div>
  );
};
