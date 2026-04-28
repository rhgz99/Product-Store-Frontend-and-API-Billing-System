import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SignUpService } from "../../services/authServices";
import { useUser } from "../../hooks/useUser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUpForm = () => {
  const { isAccountCreated, setIsAccountCreated } = useUser();
  const [creationError, setCreationError] = useState(null);
  const navigateToLogin = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setIsAccountCreated(false);
    setCreationError(null);

    const response = await SignUpService(data);

    if (response.success) {
      setIsAccountCreated(true);
      reset();
    } else {
      setCreationError(response.message);
    }
  };

  useEffect(() => {
    if (isAccountCreated) {
      const timer = setTimeout(() => {
        navigateToLogin("/sign-in", { replace: true });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isAccountCreated]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" mt-8 mx-auto flex flex-col gap-4 lg:gap-6 max-w-125 text-left"
    >
      <input
        {...register("username", {
          required: "Username is required",
          pattern: {
            value: /^[a-zA-Z0-9_]+$/,
            message:
              "Username can only contain letters, numbers, and underscores",
          },
          minLength: {
            value: 6,
            message: "Username must be at least 6 characters",
          },
          maxLength: {
            value: 20,
            message: "Username must be no longer than 20 characters",
          },
        })}
        className={`p-2 border-2 border-secondary rounded focus:outline-primary placeholder:text-secondary  disabled:opacity-70 disabled:cursor-not-allowed ${
          errors.username
            ? "border-red-500 outline-red-500 focus:outline-red-500"
            : ""
        }`}
        type="text"
        name="username"
        placeholder="Username"
        autoComplete="username"
        disabled={isAccountCreated ? true : false}
      />
      {errors.username && (
        <p className=" text-red-500 -mt-2 ml-1 text-left">
          {errors.username.message}
        </p>
      )}
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please enter a valid email address",
          },
          minLength: {
            value: 6,
            message: "Email must be at least 6 characters",
          },
          maxLength: {
            value: 254,
            message: "Email is too long",
          },
        })}
        className={`p-2 border-2 border-secondary rounded focus:outline-primary placeholder:text-secondary disabled:opacity-70 disabled:cursor-not-allowed ${
          errors.email
            ? "border-red-500 outline-red-500 focus:outline-red-500"
            : ""
        }`}
        type="email"
        name="email"
        placeholder="Email"
        autoComplete="email"
        disabled={isAccountCreated ? true : false}
      />
      {errors.email && (
        <p className=" text-red-500 -mt-2 ml-1 text-left">
          {errors.email.message}
        </p>
      )}
      <div className="flex flex-col gap-4 lg:gap-6 relative">
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
            maxLength: {
              value: 20,
              message: "Password must be no longer than 20 characters",
            },
          })}
          className={`p-2 border-2 border-secondary rounded focus:outline-primary placeholder:text-secondary disabled:opacity-70 disabled:cursor-not-allowed ${
            errors.email
              ? "border-red-500 outline-red-500 focus:outline-red-500"
              : ""
          }`}
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
          disabled={isAccountCreated ? true : false}
        />
        {errors.password && (
          <p className="text-red-500 -mt-2 ml-1 text-left">
            {errors.password.message}
          </p>
        )}
      </div>
      <button
        className="btn btn-primary font-bold"
        type="submit"
        disabled={isAccountCreated ? true : false}
      >
        Sign Up
      </button>
      <div className="text-center">
        {isAccountCreated && (
          <p className="text-valid">
            Account created successfully. Redirecting...
          </p>
        )}
        {!isAccountCreated && creationError && (
          <p className="text-invalid">{creationError}</p>
        )}
      </div>
    </form>
  );
};

export default SignUpForm;
