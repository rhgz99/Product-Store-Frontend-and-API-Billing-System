import { useCart } from "../hooks/useCart";

const Cart = () => {
  const {productToCart} = useCart()
  return (
    <section className="cart">
      <h2>Cart</h2>
      <p>Products added to cart will appear here.</p>
      <div className="cart-product-list">
        {productToCart.map(product => (
          <div key={product.id}>
            <h2>{product.product_name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cart;
