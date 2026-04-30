import React from "react";
import SignInForm from "../components/sign-in/SignInForm";
import NavbarAlt from "../components/navbar/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-background h-screen font-primary">
      <div className="m-6 mt-8 text-text-primary text-center">
        <h1 className="text-h1-m font-bold">Sign In</h1>
        <SignInForm />
        <p className="mt-2 text-secondary">
          Don't have account?{" "}
          <Link className="text-darkest hover:text-primary" to="/sign-up">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
