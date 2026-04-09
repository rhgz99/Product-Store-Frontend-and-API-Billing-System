import { useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext";

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  /* get products */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchProducts()
  }, []);

  /*create products*/
  const handleSubmit = async (e) => {
    e.preventDefault()
   try {
     
    const response = await fetch('http://localhost:5000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        product_name: e.target.product_name.value,
        price: e.target.price.value,
      })
    })
    const data = await response.json()
    setProducts((prev)=> [...prev, data])
   } catch (error) {
    setError(error)
   }
  }

  return (
    <ProductsContext.Provider value={{ products, error, handleSubmit }}>
      {children}
    </ProductsContext.Provider>
  );
};
