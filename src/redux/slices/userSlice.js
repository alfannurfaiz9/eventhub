import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { removeToken } from "./authSlice";

const initialState = {
  user: null,
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

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder.addAsyncThunk(getUserProfile, {
      pending: (state) => {
        state.isPending = true;
        state.isFulfilled = false;
        state.isRejected = false;
      },
      fulfilled: (state, { payload }) => {
        state.user = payload.Data;
        state.user.img_url = `${import.meta.env.VITE_API_URL}/user/img/${payload.Data.img_url}`;
        state.isPending = false;
        state.isFulfilled = true;
      },
      rejected: (state, { payload }) => {
        state.isRejected = true;
        state.isPending = false;
        state.error = payload.data.Message;
      },
    });
  },
});

export default userSlice.reducer;
