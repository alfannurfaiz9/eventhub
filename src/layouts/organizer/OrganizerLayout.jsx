import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth.js";

const OrganizerLayout = () => {
  const navigate = useNavigate();
  const user = useAuth();

  useEffect(() => {
    user?.role !== "organizer" && navigate("/");
  }, [user?.role, navigate]);

  return <>{user?.role === "organizer" && <Outlet />}</>;
};

export default OrganizerLayout;
