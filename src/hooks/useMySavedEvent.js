import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMySavedEvent } from "../redux/slices/userSlice";
import useAuth from "./useAuth";

const useMySavedEvent = () => {
  const dispatch = useDispatch();
  const token = useAuth();
  const saved = useSelector((state) => state.userState.saved);
  const role = useSelector((state) => state?.userState?.user?.role);

  useEffect(() => {
    if (role === "attendee") {
      dispatch(getMySavedEvent({ token }));
    }
  }, [dispatch, token, role]);

  return saved;
};

export default useMySavedEvent;
