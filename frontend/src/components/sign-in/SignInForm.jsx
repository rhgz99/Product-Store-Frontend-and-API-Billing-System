import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { SignInService } from "../../services/authServices";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignInForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { signIng } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    const response = await SignInService(data);
    signIng(response?.data);

    if (response.success) {
      navigate("/", { replace: true });
    } else {
      setError(response.message);
    }
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 mx-auto flex flex-col gap-4 lg:gap-6 max-w-125 text-left"
    >
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
        className={`p-2 border border-secondary rounded focus:outline-primary placeholder:text-secondary ${
          errors.email
            ? "border-red-500 outline-red-500 focus:outline-red-500"
            : ""
        }`}
        type="email"
        name="email"
        placeholder="Email"
        autoComplete="usernames"
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
          className={`p-2 border border-secondary rounded focus:outline-primary placeholder:text-secondary ${
            errors.email
              ? "border-red-500 outline-red-500 focus:outline-red-500"
              : ""
          }`}
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
        />
        {errors.password && (
          <p className="text-red-500 -mt-2 ml-1 text-left">
            {errors.password.message}
          </p>
        )}
      </div>
      <button className="btn btn-primary font-bold" type="submit">
        Sign In
      </button>
      <div className="text-center">
        {error && <p className="text-center text-invalid">{error}</p>}
      </div>
    </form>
  );
};

export default SignInForm;
