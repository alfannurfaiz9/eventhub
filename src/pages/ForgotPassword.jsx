import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaCheck, FaEyeSlash, FaRegEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { resetPasswordThunk } from "../redux/slices/registerSlice";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const reg = useSelector((state) => state.registerState);
  const registeredUsers = useSelector(
    (state) => state.registerState.registeredUser,
  );

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const found = registeredUsers.find(
        (user) => user.email === e.target.email.value,
      );

      if (!found) {
        setError(true);
        return;
      }

      await dispatch(
        resetPasswordThunk({
          userId: found.id,
          new_password: e.target.new_password.value,
        }),
      ).unwrap();

      setStep(2);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (() => {
      if (reg.isPending) {
        setLoading(true);
      } else {
        setLoading(false);
      }

      if (step === 2) {
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    })();
  }, [reg, step, navigate]);

  return (
    <section className="w-full flex items-center justify-center">
      <div className={`${step === 1 ? "grid" : "hidden"} gap-6 lg:w-5/12`}>
        <div>
          <h2 className="text-2xl font-bold">Reset Your Password</h2>
          <p className="text-sm text-dark-gray">
            Enter your email and we'll send a link.{" "}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-3 text-xs w-full">
          <label htmlFor="email" className="text-black/80">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="alex@example.com"
            className="p-2 rounded-lg bg-white border border-gray-300"
            required
          />
          <label htmlFor="new-password" className="text-black/80">
            New Password
          </label>
          <div className="flex justify-between text-xs bg-white rounded-lg border border-gray-300">
            <input
              type="password"
              name="new_password"
              id="new_password"
              placeholder={showPassword ? "password" : "••••••••"}
              className="p-2 rounded-lg bg-white w-full focus:outline-none"
              required
              minLength={7}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="p-3 cursor-pointer text-dark-gray"
            >
              {showPassword ? <FaEyeSlash /> : <FaRegEye />}
            </button>
          </div>
          <p
            className={`${error ? "opacity-100" : "opacity-0"} text-xs text-red`}
          >
            We couldn't find an account with that email address
          </p>
          <button
            className="flex items-center justify-center bg-primary text-white py-1.5 rounded-lg cursor-pointer hover:opacity-90 text-sm"
            type="submit"
          >
            <AiOutlineLoading3Quarters
              className={`${loading ? "block" : "hidden"} text-xl animate-spin`}
            />
            {loading ? "" : "Reset password"}
          </button>
        </form>
      </div>
      <div
        className={`${step === 2 ? "grid " : "hidden"} place-items-center gap-2`}
      >
        <div className="bg-light-green w-14 h-14 rounded-full flex items-center justify-center">
          <FaCheck className="text-xl text-green" />
        </div>
        <h2 className="text-2xl font-bold">Congratulations</h2>
        <p className="text-sm text-dark-gray">
          Your password has been successfully reset!
        </p>
        <Link to="/login" className="text-xs text-primary mt-4">
          Back to sign in
        </Link>
      </div>
    </section>
  );
};

export default ForgotPassword;
