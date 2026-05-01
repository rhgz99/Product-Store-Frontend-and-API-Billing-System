import React, { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";
import { getProducts } from "../../services/productServices";

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await getProducts();
      
      if (response.success) {
        setProducts(response.data);
      } else {
        setError(response.message);
      }
      setProductsLoading(false);
    };
    fetchProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ products, productsLoading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
