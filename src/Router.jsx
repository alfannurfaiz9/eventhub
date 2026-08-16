import { Routes, Route, Navigate } from "react-router";

import Home from "./pages/Home.jsx";
import Events from "./pages/Events.jsx";
import Communities from "./pages/Communities.jsx";
import EventDetail from "./pages/EventDetail.jsx";
import CommunityDetail from "./pages/CommunityDetail.jsx";
import Register from "./pages/Register.jsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/explore" replace />} />
      <Route path="/explore" element={<Home />} />

      <Route path="/register" element={<Register />} />

      <Route path="/events">
        <Route index element={<Events />} />
        <Route path=":category/:location" element={<Events />} />
        <Route path=":id" element={<EventDetail />} />
      </Route>

      <Route path="/communities">
        <Route index element={<Navigate to="/communities/all" replace />} />
        <Route path="all" element={<Communities />} />
        <Route path=":search" element={<Communities />} />
      </Route>

      <Route path="/communities">
        <Route index path=":id" element={<CommunityDetail />} />
      </Route>
    </Routes>
  );
};

export default Router;
