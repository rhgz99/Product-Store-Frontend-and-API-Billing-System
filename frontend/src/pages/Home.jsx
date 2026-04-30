import Navbar from "../components/navbar/Navbar";

const Home = () => {
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
          <button className="btn btn-primary font-bold">
            Shop Now
          </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;