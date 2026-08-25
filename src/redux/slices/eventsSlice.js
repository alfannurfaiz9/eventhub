import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
};

export const getEventsThunk = createAsyncThunk(
  "get_events",
  async (events, { rejectWithValue }) => {
    try {
      const datas = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(events);
        }, 3000);
      });

      return datas;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addEventsThunk = createAsyncThunk(
  "add_events",
  async (newEvent, { rejectWithValue }) => {
    try {
      const datas = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(newEvent);
        }, 3000);
      });

      return datas;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder
      .addAsyncThunk(getEventsThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.events = payload;
          state.isPending = false;
          state.isFulfilled = true;
        },
        isRejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = payload;
        },
      })
      .addAsyncThunk(addEventsThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.events.push(payload);
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

export default eventsSlice.reducer;
