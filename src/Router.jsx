import { Routes, Route, Navigate } from "react-router";

import Home from "./pages/Home.jsx";
import Events from "./pages/Events.jsx";
import Communities from "./pages/Communities.jsx";
import EventDetail from "./pages/EventDetail.jsx";
import CommunityDetail from "./pages/CommunityDetail.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import MyEventUpcoming from "./pages/MyEventsUpcoming.jsx";
import MyProfileEvent from "./pages/MyProfileEvent.jsx";
import MyEventPast from "./pages/MyEventPast.jsx";
import MyEventSaved from "./pages/MyEventSaved.jsx";
import MyProfileCommunities from "./pages/MyProfileCommunities.jsx";
import MyProfileSaved from "./pages/MyProfileSaved.jsx";
import CommunityDetailMember from "./pages/CommunityDetailMember.jsx";
import CommunityDetailDiscussions from "./pages/CommunityDetailDiscussions.jsx";

import AuthLayout from "./layouts/AuthLayout.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import ProtectedLayout from "./layouts/ProtectedLayout.jsx";
import Notifications from "./pages/Notifications.jsx";
import MyEventLayout from "./layouts/MyEventLayout.jsx";
import MyProfileLayout from "./layouts/MyProfileLayout.jsx";
import CommunityDetailLayout from "./layouts/CommunityDetailLayout.jsx";

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
        </Route>

        <Route path="/communities">
          <Route index element={<Communities />} />
        </Route>
      </Route>

      <Route element={<ProtectedLayout />}>
        <Route path="/events">
          <Route path="detail/:id" element={<EventDetail />} />
        </Route>

        <Route path="/communities">
          <Route path="detail/:id" element={<CommunityDetailLayout />}>
            <Route index element={<CommunityDetail />} />
            <Route path="members" element={<CommunityDetailMember />} />
            <Route
              path="discussions"
              element={<CommunityDetailDiscussions />}
            />
          </Route>
        </Route>

        <Route path="/notifications">
          <Route index element={<Notifications />} />
        </Route>

        <Route path="/my-events" element={<MyEventLayout />}>
          <Route index element={<MyEventUpcoming />} />
          <Route path="past" element={<MyEventPast />} />
          <Route path="saved" element={<MyEventSaved />} />
        </Route>

        <Route path="/profile" element={<MyProfileLayout />}>
          <Route index element={<MyProfileEvent />} />
          <Route path="communities" element={<MyProfileCommunities />} />
          <Route path="saved" element={<MyProfileSaved />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
