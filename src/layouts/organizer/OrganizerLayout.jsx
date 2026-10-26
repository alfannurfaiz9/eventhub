import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { useSelector } from "react-redux";

const OrganizerLayout = () => {
  const navigate = useNavigate();
  const role = useSelector((state) => state?.authState?.role);

  useEffect(() => {
    role !== "organizer" && navigate("/");
  }, [role, navigate]);

  return <>{role === "organizer" && <Outlet />}</>;
};

export default OrganizerLayout;
