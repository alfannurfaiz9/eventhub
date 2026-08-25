import Navbar from "../components/Navbar.jsx";
import { Outlet } from "react-router";
import Toast from "../components/Toast.jsx";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const [loading, setLoading] = useState(false);

  const register = useSelector((state) => state.registerState);
  const events = useSelector((state) => state.eventsState);
  const communities = useSelector((state) => state.communitiesState);

  useEffect(() => {
    (() => {
      if (register.isPending || events.isPending || communities.isPending) {
        setLoading(true);
      } else {
        setLoading(false);
      }
    })();
  }, [register, events, communities]);

  return (
    <>
      <Navbar />
      <main>
        <div className={loading ? "block" : "hidden"}>
          <Toast />
        </div>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
