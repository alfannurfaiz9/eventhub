import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEventsThunk } from "../redux/slices/eventsSlice";

const useEvent = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.eventsState.events);

  useEffect(() => {
    dispatch(getEventsThunk());
  }, [dispatch]);

  return events;
};

export default useEvent;
