import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  communities: [],
  detail: null,
  events: null,
  members: null,
  discussion: null,
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
        `${import.meta.env.VITE_API_URL}/communities/${payload.id}`,
      );

      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getCommunityEventsThunk = createAsyncThunk(
  "get_community_events",
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

export const getCommunityMemberThunk = createAsyncThunk(
  "get_community_member",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/communities/${payload.id}/members`,
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

export const getCommunityDiscussionsThunk = createAsyncThunk(
  "get_community_discussion",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/communities/${payload.id}/discussions`,
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
      .addAsyncThunk(getCommunityEventsThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.isPending = false;
          state.isFulfilled = true;
          state.events = payload;
        },
        rejected: (state, { payload }) => {
          state.isFulfilled = false;
          state.isRejected = true;
          state.error = payload.message;
        },
      })
      .addAsyncThunk(getCommunityDetailThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.detail = payload.Data;
          state.isPending = false;
          state.isFulfilled = true;
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = payload;
        },
      })
      .addAsyncThunk(getCommunityMemberThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.members = payload;
          state.isPending = false;
          state.isFulfilled = true;
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.error = payload;
        },
      });
  },
});

export default communitiesSlice.reducer;
