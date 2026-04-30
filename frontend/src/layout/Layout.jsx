import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavbarAlt from "../components/navbar/Navbar";

const Layout = () => {
  return (
    <>
    <NavbarAlt/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
