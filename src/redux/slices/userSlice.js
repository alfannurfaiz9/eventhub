import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { removeToken } from "./authSlice";
import { toast } from "react-toastify";

const initialState = {
  user: null,
  event: null,
  saved: null,
  community: null,
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
};

export const getUserProfile = createAsyncThunk(
  "get_profile",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/profile`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${payload.token}`,
          },
        },
      );

      const data = await response.json();

      if (response.status === 401) {
        dispatch(removeToken());
        throw { data, payload };
      }

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const changeUserProfile = createAsyncThunk(
  "change_profile",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/edit`,
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
          method: "PATCH",
          body: payload.data,
        },
      );

      if (!response.ok) {
        throw await response.json().Data;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const resetPassword = createAsyncThunk(
  "reset_password",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/change-password`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
          body: JSON.stringify(payload.body),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      return {
        next: payload.next,
        data,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getMyEvent = createAsyncThunk(
  "get_my_event",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/event`,
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        },
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

export const getMyCommunity = createAsyncThunk(
  "get_my_community",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/community`,
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        },
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

export const getMySavedEvent = createAsyncThunk(
  "get_my_saved_event",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/saved`,
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        },
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

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder
      .addAsyncThunk(getUserProfile, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.user = payload.Data;
          state.isPending = false;
          state.isFulfilled = true;
        },
        rejected: (state, { payload }) => {
          state.isRejected = true;
          state.isPending = false;
          state.error = payload?.data?.Message;
        },
      })
      .addAsyncThunk(changeUserProfile, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state) => {
          state.isPending = false;
          state.isFulfilled = true;
          toast.success("Profile successfully updated");
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = payload;
        },
      })
      .addAsyncThunk(resetPassword, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          toast.success(payload.data.Message);
          state.isPending = false;
          state.isFulfilled = true;
          if (payload.next) {
            payload.next();
          }
        },
        rejected: (state, { payload }) => {
          toast.error(payload.Message);
          state.isPending = false;
          state.isRejected = true;
          state.error = payload.Message;
        },
      })
      .addAsyncThunk(getMyEvent, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.event = payload.Data;
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = payload.Message;
        },
      })
      .addAsyncThunk(getMyCommunity, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.community = payload.Data;
          state.isPending = false;
          state.isFulfilled = true;
        },
        rejected: (state, { payload }) => {
          state.error = payload.Message;
          state.isPending = false;
          state.isRejected = true;
        },
      })
      .addAsyncThunk(getMySavedEvent, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.saved = payload.Data;
          state.isPending = false;
          state.isFulfilled = true;
        },
        rejected: (state, { payload }) => {
          state.error = payload.Message;
          state.isPending = false;
          state.isRejected = true;
        },
      });
  },
});

export default userSlice.reducer;
