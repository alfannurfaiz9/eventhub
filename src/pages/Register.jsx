import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

import Discover from "../components/Discover.jsx";

const Register = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users"));

    const newId = users && users.map((user) => user.id)[users.length - 1] + 1;

    if (!users) {
      const newUser = { id: 3, ...data };
      localStorage.setItem("users", JSON.stringify([newUser]));
      return;
    }

    if (users.find((user) => user.email === data.email)) {
      setError("email", {
        type: "manual",
        message: "Email is already registered",
      });

      return;
    }

    const updatedUsers = [...users, { id: newId, ...data }];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    navigate("/login");
  };

  return (
    <>
      <section className="flex lg:justify-between min-h-screen">
        <Discover />
        <section className="flex items-center justify-center bg-gray w-full lg:w-10/12 px-4 lg:px-58">
          <div className="grid gap-4 w-full">
            <div>
              <p className="text-xl font-bold">Welcome back</p>
              <div className="text-xs flex gap-2">
                <p className="text-dark-gray">Don't have an account? </p>
                <Link className="text-primary font-semibold hover:underline">
                  Sign up
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_2fr_1fr] items-center gap-2">
              <div className="h-[0.5px] bg-gray-300"></div>
              <div className="w-full">
                <p className="text-center text-xs text-dark-gray">
                  or continue with email
                </p>
              </div>
              <div className="h-[0.5px] bg-gray-300"></div>
            </div>
            <div className="flex gap-2">
              <button className="py-2 w-full text-sm border border-gray-300 rounded-lg bg-white cursor-pointer hover:opacity-60 font-semibold text-dark-gray">
                Google
              </button>
              <button className="py-2 w-full text-sm border border-gray-300 rounded-lg bg-white cursor-pointer hover:opacity-60 font-semibold text-dark-gray">
                Github
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
              <div className="grid gap-1">
                <label className="text-sm font-medium" htmlFor="email">
                  Email adress
                </label>
                <input
                  id="email"
                  type="email"
                  className={`${errors?.email?.message && "outline outline-red"} p-2.5 text-xs bg-white rounded-lg border border-gray-300 focus:outline-none`}
                  placeholder="alex@example.com"
                  {...register("email", { required: "Email is required" })}
                />
                <span
                  className={`${errors?.email?.message ? "text-red" : "text-gray"} text-xs`}
                >
                  {errors?.email?.message || "error"}
                </span>
              </div>
              <div className="grid gap-1">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium" htmlFor="password">
                    Password
                  </label>
                  <Link className="text-xs text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div
                  className={`${errors?.password?.message && "border-red"} flex justify-between text-xs bg-white rounded-lg border border-gray-300`}
                >
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="w-full p-2.5 focus:outline-none"
                    placeholder={showPassword ? "password" : "••••••••"}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 7,
                        message: "Password must be at least 7 characters",
                      },
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="p-3 cursor-pointer text-dark-gray"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                  </button>
                </div>

                <span
                  className={`${errors?.password?.message ? "text-red" : "text-gray"} text-xs`}
                >
                  {errors?.password?.message || "error"}
                </span>
              </div>
              <button
                className="bg-primary text-white py-2 rounded-lg cursor-pointer hover:opacity-90 text-sm"
                type="submit"
              >
                Sign In
              </button>
            </form>
            <div className="flex justify-center gap-2 text-xs text-dark-gray">
              <p>Just browsing?</p>
              <Link to="/" className="underline">
                Continue as guest →
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Register;
