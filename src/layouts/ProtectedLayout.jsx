import { Outlet, useNavigate } from "react-router";

import { useEffect } from "react";
import useAuth from "../hooks/useAuth.js";

const ProtectedLayout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    !user && navigate("/login");
  }, [navigate, user]);

  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default ProtectedLayout;
