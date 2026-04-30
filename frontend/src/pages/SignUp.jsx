import React from "react";
import NavbarAlt from "../components/navbar/Navbar";
import SignUpForm from "../components/sign-up/SignUpForm";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="bg-background h-screen font-primary">
      <div className="m-6 mt-8 text-text-primary text-center">
        <h1 className="text-h1-m font-bold">Sign Up</h1>
        <SignUpForm />
        <p className="mt-2 text-secondary">
          Do you have account?{" "}
          <Link className="text-darkest hover:text-primary" to="/sign-in">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
