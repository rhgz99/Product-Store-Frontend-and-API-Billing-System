import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import "../styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "../context/UserContextProvider";
import Layout from "../layout/Layout";

const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn />} />
          </Route>
        </Routes>
      </Router>
    </UserContextProvider>
  );
};

export default App;
