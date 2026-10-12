import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyCommunity } from "../redux/slices/userSlice";
import useAuth from "./useAuth";

const useMyCommunity = () => {
  const dispatch = useDispatch();
  const token = useAuth();
  const community = useSelector((state) => state.userState.community);

  useEffect(() => {
    dispatch(getMyCommunity({ token }));
  }, [dispatch, token]);

  return community;
};

export default useMyCommunity;
