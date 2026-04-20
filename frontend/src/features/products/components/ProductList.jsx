import { useCart } from "../../cart/hooks/useCart";
import { useProducts } from "../hooks/useProducts";

const ProductCard = () => {
  const { products } = useProducts();
  const { error } = useProducts();
  const { addToCart } = useCart();

  return (
    <section className="bg-background py-10 flex flex-col justify-center items-center gap-5 font-primary">
      <h2 className="text-3xl text-primary md:text-5xl">Feature products</h2>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-5 gap-5">
      {error
        ? "Error: reload the page"
        : products.map((product) => (
            <div className="flex flex-col justify-center items-center m-5 gap-5" key={product.id}>
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
    </div>
    </section>
  );
};

export default ProductCard;
