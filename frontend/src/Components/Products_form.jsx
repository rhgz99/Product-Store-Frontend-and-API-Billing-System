import { useState } from "react";

const Products_form = () => {
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_name: e.target.product_name.value,
          price: e.target.price.value,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setError(error);
    }
  };

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
