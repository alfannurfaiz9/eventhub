import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  user: null,
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

export const loginThunk = createAsyncThunk(
  "login_user",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(payload);
        }, 3000);
      });

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logoutThunk = createAsyncThunk(
  "logout_user",
  async (_, { rejectWithValue }) => {
    try {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder
      .addAsyncThunk(loginThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.user = payload;
          state.isPending = false;
          state.isFulfilled = true;
          toast.success("Login Successful!");
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = payload;
        },
      })
      .addAsyncThunk(logoutThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state) => {
          state.user = null;
          state.isPending = false;
          state.isFulfilled = true;
          toast.success("You have been logged out successfully");
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = payload;
        },
      });
  },
});

export default authSlice.reducer;
