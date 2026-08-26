import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  registeredUser: [],
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
};

export const registerUserThunk = createAsyncThunk(
  "regist_user",
  async (user, { rejectWithValue }) => {
    try {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(user);
        }, 3000);
      });

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const joinEventThunk = createAsyncThunk(
  "join_event",
  async (event, { rejectWithValue }) => {
    try {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(event);
        }, 3000);
      });

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const saveEventThunk = createAsyncThunk(
  "save_event",
  async (event, { rejectWithValue }) => {
    try {
      const data = new Promise((resolve) => {
        setTimeout(() => {
          resolve(event);
        }, 3000);
      });

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const joinCommunityThunk = createAsyncThunk(
  "join_community",
  async (community, { rejectWithValue }) => {
    try {
      const data = new Promise((resolve) => {
        setTimeout(() => {
          resolve(community);
        }, 3000);
      });

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const updateProfileThunk = createAsyncThunk(
  "edit_profile",
  async (user, { rejectWithValue }) => {
    try {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(user);
        }, 3000);
      });

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const registerSlice = createSlice({
  name: "registerd_user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder
      .addAsyncThunk(registerUserThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.registeredUser.push(payload.data);
          state.isPending = false;
          state.isFulfilled = true;
          payload.navigate("/login");
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = payload;
        },
      })
      .addAsyncThunk(joinEventThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          const selected = state.registeredUser.find(
            (user) => user.id === payload.userId,
          );

          const joined = selected.event_id.includes(payload.eventId);

          if (joined) {
            selected.event_id = selected.event_id.filter(
              (id) => id != payload.eventId,
            );
          } else {
            selected.event_id.push(payload.eventId);
          }
          state.isPending = false;
          state.isFulfilled = true;
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = payload;
        },
      })
      .addAsyncThunk(saveEventThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          const selected = state.registeredUser.find(
            (user) => user.id === payload.userId,
          );

          const saved = selected.saved_event_id.includes(payload.eventId);

          if (saved) {
            selected.saved_event_id = selected.saved_event_id.filter(
              (id) => id != payload.eventId,
            );
          } else {
            selected.saved_event_id.push(payload.eventId);
          }
          state.isPending = false;
          state.isFulfilled = true;
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = payload;
        },
      })
      .addAsyncThunk(joinCommunityThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          const selected = state.registeredUser.find(
            (user) => user.id === payload.userId,
          );

          const saved = selected.community_id.includes(payload.communityId);

          if (saved) {
            selected.community_id = selected.community_id.filter(
              (id) => id != payload.communityId,
            );
          } else {
            selected.community_id.push(payload.communityId);
          }

          state.isPending = false;
          state.isFulfilled = true;
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = payload;
        },
      })
      .addAsyncThunk(updateProfileThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          const selected = state.registeredUser.find(
            (user) => user.id === payload.userId,
          );

          selected.img = payload.img;
          selected.full_name = payload.full_name;
          selected.address = payload.address;
          selected.bio = payload.bio;

          state.isPending = false;
          state.isFulfilled = true;
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = payload;
        },
      });
  },
});

export default registerSlice.reducer;
