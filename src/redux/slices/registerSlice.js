import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
};

export const registerUserThunk = createAsyncThunk(
  "regist_user",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(payload.data),
        },
      );

      if (!response.ok) {
        throw await response.json();
      }

      return payload;
    } catch (error) {
      return rejectWithValue(error.Message);
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

export const resetPasswordThunk = createAsyncThunk(
  "reset_password",
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

const registerSlice = createSlice({
  name: "registerd_user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder.addAsyncThunk(registerUserThunk, {
      pending: (state) => {
        state.isPending = true;
        state.isFulfilled = false;
        state.isRejected = false;
      },
      fulfilled: (state, { payload }) => {
        state.isPending = false;
        state.isFulfilled = true;
        toast.success("Account created successfully");
        if (payload.next) {
          payload.next();
        }
      },
      rejected: (state, { payload }) => {
        state.isPending = false;
        state.isRejected = true;
        state.error = payload;
      },
    });
    // .addAsyncThunk(joinEventThunk, {
    //   pending: (state) => {
    //     state.isPending = true;
    //     state.isFulfilled = false;
    //     state.isRejected = false;
    //   },
    //   fulfilled: (state, { payload }) => {
    //     const selected = state.registeredUser.find(
    //       (user) => user.id === payload.userId,
    //     );

    //     const joined = selected.event_id.includes(payload.eventId);

    //     if (joined) {
    //       selected.event_id = selected.event_id.filter(
    //         (id) => id != payload.eventId,
    //       );

    //       toast.success("You have left the event");
    //     } else {
    //       selected.event_id.push(payload.eventId);
    //       toast.success("Successfully joined the event");
    //     }
    //     state.isPending = false;
    //     state.isFulfilled = true;
    //   },
    //   rejected: (state, { payload }) => {
    //     state.isPending = false;
    //     state.isRejected = true;
    //     state.error = payload;
    //   },
    // })
    // .addAsyncThunk(saveEventThunk, {
    //   pending: (state) => {
    //     state.isPending = true;
    //     state.isFulfilled = false;
    //     state.isRejected = false;
    //   },
    //   fulfilled: (state, { payload }) => {
    //     const selected = state.registeredUser.find(
    //       (user) => user.id === payload.userId,
    //     );

    //     const saved = selected.saved_event_id.includes(payload.eventId);

    //     if (saved) {
    //       selected.saved_event_id = selected.saved_event_id.filter(
    //         (id) => id != payload.eventId,
    //       );
    //       toast.success("Event removed from your list");
    //     } else {
    //       selected.saved_event_id.push(payload.eventId);
    //       toast.success("Successfully save the event");
    //     }
    //     state.isPending = false;
    //     state.isFulfilled = true;
    //   },
    //   rejected: (state, { payload }) => {
    //     state.isPending = false;
    //     state.isRejected = true;
    //     state.error = payload;
    //   },
    // })
    // .addAsyncThunk(joinCommunityThunk, {
    //   pending: (state) => {
    //     state.isPending = true;
    //     state.isFulfilled = false;
    //     state.isRejected = false;
    //   },
    //   fulfilled: (state, { payload }) => {
    //     const selected = state.registeredUser.find(
    //       (user) => user.id === payload.userId,
    //     );

    //     const saved = selected.community_id.includes(payload.communityId);

    //     if (saved) {
    //       selected.community_id = selected.community_id.filter(
    //         (id) => id != payload.communityId,
    //       );
    //       toast.success("You have left the community");
    //     } else {
    //       selected.community_id.push(payload.communityId);
    //       toast.success("Successfully joined the community");
    //     }

    //     state.isPending = false;
    //     state.isFulfilled = true;
    //   },
    //   rejected: (state, { payload }) => {
    //     state.isPending = false;
    //     state.isRejected = true;
    //     state.error = payload;
    //   },
    // })
    // .addAsyncThunk(updateProfileThunk, {
    //   pending: (state) => {
    //     state.isPending = true;
    //     state.isFulfilled = false;
    //     state.isRejected = false;
    //   },
    //   fulfilled: (state, { payload }) => {
    //     const selected = state.registeredUser.find(
    //       (user) => user.id === payload.userId,
    //     );

    //     selected.img = payload.img;
    //     selected.full_name = payload.full_name;
    //     selected.address = payload.address;
    //     selected.bio = payload.bio;

    //     state.isPending = false;
    //     state.isFulfilled = true;
    //     toast.success("Profile updated successfully");
    //   },
    //   rejected: (state, { payload }) => {
    //     state.isPending = false;
    //     state.isRejected = true;
    //     state.error = payload;
    //   },
    // })
    // .addAsyncThunk(resetPasswordThunk, {
    //   pending: (state) => {
    //     state.isPending = true;
    //     state.isFulfilled = false;
    //     state.isRejected = false;
    //   },
    //   fulfilled: (state, { payload }) => {
    //     const selected = state.registeredUser.find(
    //       (user) => user.id === payload.userId,
    //     );

    //     selected.password = payload.new_password;

    //     state.isPending = false;
    //     state.isFulfilled = true;
    //     toast.success("Password updated successfully");
    //   },
    //   rejected: (state, { payload }) => {
    //     state.isPending = false;
    //     state.isRejected = true;
    //     state.error = payload;
    //   },
    // });
  },
});

export default registerSlice.reducer;
