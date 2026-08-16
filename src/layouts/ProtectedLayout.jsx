import { Outlet, useNavigate } from "react-router";

import Navbar from "../components/Navbar.jsx";
import { useEffect } from "react";

const ProtectedLayout = () => {
  const userLogin = localStorage.getItem("isLogin");

  const navigate = useNavigate();

  useEffect(() => {
    !userLogin && navigate("/login");
  });

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default ProtectedLayout;
