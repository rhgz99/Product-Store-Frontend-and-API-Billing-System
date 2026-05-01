import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-background font-primary mt-8">
      <div className="max-w-462 mx-auto grid grid-cols-1 px-6 py-12 gap-12 md:grid-cols-2 lg:grid-cols-3">
        

        <div>
          <h2 className="text-h2 font-semibold mb-4">Store</h2>
          <p className="text-p  opacity-90 ">
            Discover the best products at unbeatable prices. Quality and style in one place.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-h3 mb-4">Navigation</h3>
          <ul className="flex flex-col gap-2 opacity-80">
            <li><Link to='/' className="link">Home</Link></li>
            <li><Link to='about' className="link">About</Link></li>
            <li><Link to='contact' className="link">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-h3 mb-4">Stay updated</h3>
          <p className="text-p opacity-80 mb-3">
            Subscribe to get special offers and updates.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded-l bg-transparent border border-background outline-none text-p"
            />
            <button className="px-4 bg-background text-primary font-semibold rounded-r">
              Go
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-background/80 py-4 text-center text-sm opacity-70">
        © Store.
      </div>
    </footer>
  );
};

export default Footer;