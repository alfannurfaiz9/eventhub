import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  communities: [],
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
};

export const getCommunitiesThunk = createAsyncThunk(
  "get_communities",
  async (communities, { rejectWithValue }) => {
    try {
      const datas = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(communities);
        }, 3000);
      });

      return datas;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const communitiesSlice = createSlice({
  name: "communities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder.addAsyncThunk(getCommunitiesThunk, {
      pending: (state) => {
        state.isPending = true;
        state.isFulfilled = false;
        state.isRejected = false;
      },
      fulfilled: (state, { payload }) => {
        state.communities = payload;
        state.isPending = false;
        state.isFulfilled = true;
      },
      isRejected: (state, { payload }) => {
        state.isPending = false;
        state.isRejected = true;
        state.error = payload;
      },
    });
  },
});

export default communitiesSlice.reducer;
