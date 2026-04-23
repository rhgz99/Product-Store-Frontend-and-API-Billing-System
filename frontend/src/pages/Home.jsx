import Navbar from "../components/navbar/Navbar";
import ProductList from '../features/products/components/ProductList'
import ProductForm from '../features/products/components/ProductForm'

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="h-screen bg-[url(../assets/1.jpg)] bg-cover bg-bottom md:bg-top">
        <div className="h-full w-full bg-black/50 flex justify-center items-center">
          <div className="mx-4 flex flex-col justify-center items-center text-center gap-5">
            <h1 className="text-h1-home-m md:text-h1-home-d text-white font-bold">
            Welcome to our Store
          </h1>
          <p className="text-white text-p-m md:text-p-d">
            Discover the best products at unbeatable prices.
          </p>
          <button className="btn btn-primary">
            Shop Now
          </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;