import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyEvent } from "../redux/slices/userSlice";
import useAuth from "./useAuth";

const useMyEvent = () => {
  const dispatch = useDispatch();
  const token = useAuth();
  const event = useSelector((state) => state.userState.event);

  useEffect(() => {
    dispatch(getMyEvent({ token }));
  }, [dispatch, token]);

  return event;
};

export default useMyEvent;
