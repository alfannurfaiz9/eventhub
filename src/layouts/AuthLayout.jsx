import { Outlet, useNavigate } from "react-router";
import Discover from "../components/Discover";
import { getUser } from "../utils/getDatas";
import { useEffect } from "react";

const AuthLayout = () => {
  const logedInUser = localStorage.getItem("isLogin");
  const navigate = useNavigate();

  useEffect(() => {
    if (logedInUser) {
      navigate("/");
      return;
    }
  }, [logedInUser, navigate]);
  return (
    <>
      <section className="flex lg:justify-between min-h-dvh">
        <Discover />
        <Outlet />
      </section>
    </>
  );
};

export default AuthLayout;
