export const Product = ({ product, addProduct }: any) => {
  const addProductCart = (product: any) => {
    addProduct(product);
  };

  return (
    <article className="card">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>
        {product.description} - ${product.price}
      </p>
      <button className="btn-add" onClick={() => addProductCart(product)}>
        Add cart
      </button>
    </article>
  );
};
