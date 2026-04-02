import { useEffect, useState } from "react";
import { useCart } from "../../cart/hooks/useCart";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchProduct();
  }, []);

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
