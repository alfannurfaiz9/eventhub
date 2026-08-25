import { Outlet } from "react-router";
import Discover from "../components/Discover";

const AuthLayout = () => {
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
