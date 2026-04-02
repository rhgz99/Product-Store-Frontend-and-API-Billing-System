import Cart from "../features/cart/components/Cart";
import ClientForm from "../features/clients/components/ClientForm";
import ClientList from "../features/clients/components/ClientList";
import ProductCard from "../features/products/components/ProductList";
import ProductsForm from "../features/products/components/ProductForm";

const App = () => {
  return (
    <section className="app">
      <ClientForm />
      <ClientList />
      <ProductsForm />
      <ProductCard />
      <Cart />
    </section>
  );
};

export default App;
