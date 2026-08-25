import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    setStep(2);
  };

  return (
    <section className="w-full flex items-center justify-center">
      <div className={`${step === 1 ? "grid" : "hidden"} gap-6 w-5/12`}>
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
            placeholder="alex@example.com"
            className="p-2 rounded-lg bg-white border border-gray-300"
            required
          />
          <button
            type="submit"
            className="text-sm text-white bg-primary py-2 rounded-lg cursor-pointer hover:opacity-80"
          >
            Send reset link
          </button>
        </form>
      </div>
      <div
        className={`${step === 2 ? "grid " : "hidden"} place-items-center gap-2`}
      >
        <div className="bg-light-green w-14 h-14 rounded-full flex items-center justify-center">
          <FaCheck className="text-xl text-green" />
        </div>
        <h2 className="text-2xl font-bold">Check your email</h2>
        <p className="text-sm text-dark-gray">
          We sent a reset link to
          <span className="text-black font-semibold">a@mail.com</span>
        </p>
        <Link to="/login" className="text-xs text-primary mt-4">
          Back to sign in
        </Link>
      </div>
    </section>
  );
};

export default ForgotPassword;
