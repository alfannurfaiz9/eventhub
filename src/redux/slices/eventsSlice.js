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
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/events`);

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

export const addEventsThunk = createAsyncThunk(
  "add_events",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:9000/communities?search=${payload.search}?location=${payload.location}?category=${payload.category}?page=${payload.page}`,
      );
      const events = await response.json();

      if (!response.ok) {
        throw await response.json();
      }

      return events;
    } catch (error) {
      return rejectWithValue(error);
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
          state.events = payload.Data;
          state.isPending = false;
          state.isFulfilled = true;
          state.error = null;
        },
        isRejected: (state, { payload }) => {
          console.log(payload);
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
