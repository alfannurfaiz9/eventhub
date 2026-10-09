import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommunitiesThunk } from "../redux/slices/communitiesSlice.js";

const useCommunity = () => {
  const dispatch = useDispatch();
  const communities = useSelector(
    (state) => state.communitiesState.communities,
  );

  useEffect(() => {
    dispatch(getCommunitiesThunk());
  }, [dispatch]);

  return communities;
};

export default useCommunity;
