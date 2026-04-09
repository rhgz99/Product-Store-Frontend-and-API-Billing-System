import { useCart } from "../../cart/hooks/useCart";
import { useProducts } from "../hooks/useProducts";

const ProductCard = () => {
  const { products } = useProducts();
  const { error } = useProducts();
  const { addToCart } = useCart();

  return (
    <section className="product-list">
      {error
        ? "Error: reload the page"
        : products.map((product) => (
            <div className="product_card" key={product.id}>
              <h2>{product.product_name}</h2>
              <p>{Number(product.price).toLocaleString()}</p>
              <button
                type="button"
                onClick={() => {
                  addToCart({
                    id: product.id,
                    product_name: product.product_name,
                    price: Number(product.price),
                  });
                }}
              >
                Add to cart
              </button>
            </div>
          ))}
    </section>
  );
};

export default ProductCard;
