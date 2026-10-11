import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  communities: [],
  communityDetail: null,
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
};

export const getCommunitiesThunk = createAsyncThunk(
  "get_communities",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/communities`,
      );
      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getCommunityDetailThunk = createAsyncThunk(
  "get_community_detail",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/communities/${payload.id}/events`,
      );

      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      return data.Data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const communitiesSlice = createSlice({
  name: "communities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder
      .addAsyncThunk(getCommunitiesThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.communities = payload.Data;
          state.isPending = false;
          state.isFulfilled = true;
        },
        isRejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = payload;
        },
      })
      .addAsyncThunk(getCommunityDetailThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.isPending = false;
          state.isFulfilled = true;
          state.communityDetail = payload;
        },
        rejected: (state, { payload }) => {
          state.isFulfilled = false;
          state.isRejected = true;
          state.error = payload.message;
        },
      });
  },
});

export default communitiesSlice.reducer;
