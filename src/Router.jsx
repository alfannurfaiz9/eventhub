import { Routes, Route, Navigate } from "react-router";

import Home from "./pages/Home.jsx";
import Events from "./pages/Events.jsx";
import Communities from "./pages/Communities.jsx";
import EventDetail from "./pages/EventDetail.jsx";
import CommunityDetail from "./pages/CommunityDetail.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import ProtectedLayout from "./layouts/ProtectedLayout.jsx";

const Router = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/explore" replace />} />
        <Route path="/explore" element={<Home />} />

        <Route path="/events">
          <Route index element={<Events />} />
          <Route path=":category/:location" element={<Events />} />
        </Route>

        <Route path="/communities">
          <Route index element={<Navigate to="/communities/all" replace />} />
          <Route path="all" element={<Communities />} />
          <Route path=":search" element={<Communities />} />
        </Route>
      </Route>

      <Route element={<ProtectedLayout />}>
        <Route path="/events">
          <Route path="detail/:id" element={<EventDetail />} />
        </Route>

        <Route path="/communities">
          <Route path="detail/:id" element={<CommunityDetail />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
