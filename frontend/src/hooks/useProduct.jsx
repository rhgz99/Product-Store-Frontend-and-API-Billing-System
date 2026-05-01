import { useContext } from "react";
import { ProductContext } from "../context/productcontext/ProductContext";

export const useProduct = ()=> useContext(ProductContext)