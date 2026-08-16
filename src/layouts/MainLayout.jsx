import Navbar from "../components/Navbar.jsx";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
