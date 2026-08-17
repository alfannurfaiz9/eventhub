import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

const Register = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const users = JSON.parse(localStorage.getItem("users"));
  const organizerAndAdmin = [
    JSON.parse(import.meta.env.VITE_ORGANIZER),
    JSON.parse(import.meta.env.VITE_ADMIN),
  ];

  const combinedUser = users
    ? [...organizerAndAdmin, ...users]
    : [...organizerAndAdmin];

  const newId = users && users.map((user) => user.id)[users.length - 1] + 1;

  const onSubmit = (data) => {
    const { full_name, email, password, confirm_password } = data;

    if (confirm_password !== password) {
      setError("confirm_password", {
        type: "manual",
        message: "The passwords you entered do not match",
      });

      return;
    }

    if (combinedUser.find((user) => user.email === email)) {
      setError("email", {
        type: "manual",
        message: "Email is already registered",
      });

      return;
    }

    if (!users) {
      const newUser = {
        id: 3,
        role: "attendee",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gppkHIVokayxdmqAv4oVpaLvHevFoHG_hZlukO0lG-jqvKWZ_8sd-_mi&s=10",
        full_name,
        email,
        password,
        community_id: [],
        event_id: [],
        saved_community_id: [],
        saved_event_id: [],
      };
      localStorage.setItem("users", JSON.stringify([newUser]));

      navigate("/login");
      return;
    }

    const updatedUsers = [
      ...users,
      {
        id: newId,
        role: "user",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gppkHIVokayxdmqAv4oVpaLvHevFoHG_hZlukO0lG-jqvKWZ_8sd-_mi&s=10",
        full_name,
        email,
        password,
        community_id: [],
        event_id: [],
        saved_community_id: [],
        saved_event_id: [],
      },
    ];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    navigate("/login");
  };

  return (
    <>
      <section className="flex items-center justify-center bg-gray w-full lg:w-10/12 px-8 lg:px-58">
        <div className="grid gap-4 w-full">
          <div>
            <p className="text-xl font-bold">Create your account</p>
            <div className="text-xs flex gap-2">
              <p className="text-dark-gray">Already have an account? </p>
              <Link
                to="/login"
                className="text-primary font-semibold hover:underline"
              >
                Sign in
              </Link>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="py-2 w-full text-xs border border-gray-300 rounded-lg bg-white cursor-pointer hover:opacity-60 font-semibold text-dark-gray">
              Google
            </button>
            <button className="py-2 w-full text-xs border border-gray-300 rounded-lg bg-white cursor-pointer hover:opacity-60 font-semibold text-dark-gray">
              Github
            </button>
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

          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
            <div className="grid gap-1">
              <label className="text-xs font-medium" htmlFor="full_name">
                Full Name
              </label>
              <input
                id="full_name"
                type="text"
                className={`${errors?.full_name?.message && "outline outline-red"} p-2 text-xs bg-white rounded-lg border border-gray-300 focus:outline-none`}
                placeholder="Alex kim"
                {...register("full_name", {
                  required: "Full name is required",
                })}
              />
              <span
                className={`${errors?.full_name?.message ? "text-red" : "text-gray"} text-[10px]`}
              >
                {errors?.full_name?.message || "error"}
              </span>
            </div>
            <div className="grid gap-1">
              <label className="text-xs font-medium" htmlFor="email">
                Email adress
              </label>
              <input
                id="email"
                type="email"
                className={`${errors?.email?.message && "outline outline-red"} p-2 text-xs bg-white rounded-lg border border-gray-300 focus:outline-none`}
                placeholder="alex@example.com"
                {...register("email", { required: "Email is required" })}
              />
              <span
                className={`${errors?.email?.message ? "text-red" : "text-gray"} text-[10px]`}
              >
                {errors?.email?.message || "error"}
              </span>
            </div>
            <div className="grid gap-1">
              <label className="text-xs font-medium" htmlFor="password">
                Password
              </label>
              <div
                className={`${errors?.password?.message && "border-red"} flex justify-between text-[10px] bg-white rounded-lg border border-gray-300`}
              >
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full p-2 focus:outline-none"
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
                  className="p-2 cursor-pointer text-dark-gray"
                >
                  {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                </button>
              </div>
              <span
                className={`${errors?.password?.message ? "text-red" : "text-gray"} text-[10px]`}
              >
                {errors?.password?.message || "error"}
              </span>
            </div>
            <div className="grid gap-1">
              <label className="text-xs font-medium" htmlFor="confirm_password">
                Confirm Password
              </label>
              <div
                className={`${errors?.confirm_password?.message && "border-red"} flex justify-between text-xs bg-white rounded-lg border border-gray-300`}
              >
                <input
                  id="confirm_password"
                  type="password"
                  className="w-full p-2 focus:outline-none"
                  placeholder="Re enter your password"
                  {...register("confirm_password", {
                    required: "Confirm password is required",
                  })}
                />
              </div>
              <span
                className={`${errors?.confirm_password?.message ? "text-red" : "text-gray"} text-[10px]`}
              >
                {errors?.confirm_password?.message || "error"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="text-center"
                id="accept_terms"
                type="checkbox"
                {...register("accept_terms", {
                  required: "You must accept the terms and conditions",
                })}
              />
              <label htmlFor="accept_terms" className="text-xs text-dark-gray">
                I agree to the
                <span className="text-primary">Terms of Service</span> and{" "}
                <span className="text-primary">Privacy Policy</span>
              </label>
            </div>

            <span
              className={`${errors?.accept_terms?.message ? "text-red" : "text-gray"} text-[10px]`}
            >
              {errors?.accept_terms?.message || "error"}
            </span>
            <button
              className="bg-primary text-white py-1.5 rounded-lg cursor-pointer hover:opacity-90 text-sm"
              type="submit"
            >
              Create an account
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
