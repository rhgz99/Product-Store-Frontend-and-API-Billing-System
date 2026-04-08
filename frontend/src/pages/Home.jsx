import Navbar from "../shared/components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="h-screen bg-[url(../assets/1.jpg)] bg-cover bg-bottom md:bg-top">
        <div className="h-full w-full bg-black/50 flex justify-center items-center">
          <div className="mx-4 flex flex-col justify-center items-center text-center gap-5">
            <h1 className="text-4xl md:text-6xl text-white font-bold">
            Welcome to our Store
          </h1>
          <p className="text-white text-lg md:text-2xl">
            Discover the best products at unbeatable prices.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-md text-lg hover:bg-secondary transition">
            Shop Now
          </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
