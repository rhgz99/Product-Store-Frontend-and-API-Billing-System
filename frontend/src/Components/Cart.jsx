import { useCart } from "../hooks/useCart";
import { FaMinus, FaPlus } from "react-icons/fa";

const Cart = () => {
const {productToCart, decreaseQty, increaseQty} = useCart()

  return (
    <section className="cart">
      <h2>Cart</h2>
      <p>Products added to cart will appear here.</p>
      <div className="cart-product-list">
        {productToCart.length === 0
        ? "Empty Cart"
      : productToCart.map(product => (
          <div className="cart-product-card" key={product.id}>
            <h2>{product.product_name}</h2>
            <p>Price: {product.price.toLocaleString()}</p>
            <p>Subtotal:</p>
            <div className="cart-product-qty-selector">
              <FaMinus onClick={()=> decreaseQty(product)}/>
              <p>{product.qty}</p>
              <FaPlus onClick={()=> increaseQty(product)}/>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cart;
