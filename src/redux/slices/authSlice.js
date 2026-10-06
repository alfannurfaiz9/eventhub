import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  user: null,
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
};

export const loginThunk = createAsyncThunk(
  "login_user",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:9000/auth/login",
        payload.body,
      );
      if (!response.ok) {
        throw await response.json();
      }

      const data = await response.json();

      return {
        data: data.Data,
        next: payload.next
      };
    } catch (error) {
      return rejectWithValue(error);
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
          state.user = payload.data;
          state.isPending = false;
          state.isFulfilled = true;
          toast.success("Successfully loged in");
          if (payload.next) {
            payload.next();
          }
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = payload;
          state.user = null;
        },
      })
      .addAsyncThunk(logoutThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
          state.error = null;
        },
        fulfilled: (state, { payload }) => {
          state.user = payload;
          state.isPending = false;
          state.isFulfilled = true;
          state.error = null;
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
