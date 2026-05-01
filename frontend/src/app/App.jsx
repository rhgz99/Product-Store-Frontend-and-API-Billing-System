import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import "../styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "../context/usercontext/UserContextProvider";
import Layout from "../layout/Layout";
import ProductContextProvider from "../context/productcontext/ProductContextProvider";

const App = () => {
  return (
    <UserContextProvider>
      <ProductContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="sign-in" element={<SignIn />} />
            </Route>
          </Routes>
        </Router>
      </ProductContextProvider>
    </UserContextProvider>
  );
};

export default App;
