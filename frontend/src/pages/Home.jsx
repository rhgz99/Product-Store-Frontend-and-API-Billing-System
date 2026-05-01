import CarProduct from "../components/card-product/CarProduct";
import Navbar from "../components/navbar/Navbar";
import { useProduct } from "../hooks/useProduct";

const Home = () => {
  const { products } = useProduct();
  return (
    <>
      <section className="h-screen bg-[url(../assets/1.jpg)] bg-cover bg-bottom md:bg-top">
        <div className="h-full w-full bg-black/50 flex justify-center items-center">
          <div className="mx-4 flex flex-col justify-center items-center text-center gap-5">
            <h1 className="text-h1-home text-white font-bold">
              Welcome to our Store
            </h1>
            <p className="text-white text-p-home">
              Discover the best products at unbeatable prices.
            </p>
            <button className="btn btn-primary font-bold">Shop Now</button>
          </div>
        </div>
      </section>
      <section className="px-4 lg:px-8 m-auto pt-8  font-primary  text-text-primary">
        <p className="text-p-m font-light uppercase">Products that...</p>
        <h2 className="text-h2 font-medium uppercase">Product List</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <CarProduct key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
