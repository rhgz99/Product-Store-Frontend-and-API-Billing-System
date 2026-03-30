import Cart from "./Components/Cart";
import ClientForm from "./Components/ClientForm";
import ProductCard from "./Components/ProductList";
import ProductsForm from "./Components/ProductsForm";

const App = () => {
  return (
    <section className="app">
      <ClientForm />
      <ProductsForm />
      <ProductCard />
      <Cart />
    </section>
  );
};

export default App;
