import { useProducts } from "../hooks/useProducts.js";

const Products_form = () => {
  const { handleSubmit, error } = useProducts();

  return (
    <section className="products_form">
      <h2>Add Product test</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="product_name">Product name:</label>
        <input type="text" id="product_name" name="product_name" required />
        <br />
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" required />
        <br />
        <button type="submit">Add Product</button>
      </form>
      {error && "Error: please try again"}
    </section>
  );
};

export default Products_form;
