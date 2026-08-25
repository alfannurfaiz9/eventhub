import { configureStore } from "@reduxjs/toolkit";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";

import authReducer from "./slices/AuthSlice";
import eventsReducer from "./slices/EventsSlice";
import communitiesReducer from "./slices/communitiesSlice";
import registerReducer from "./slices/registerSlice";

import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
// } from "redux-persist";

const storage = {
  getItem: (key) => {
    return Promise.resolve(window.localStorage.getItem(key));
  },
  setItem: (key, value) => {
    return Promise.resolve(window.localStorage.setItem(key, value));
  },
  removeItem: (key) => {
    return Promise.resolve(window.localStorage.removeItem(key));
  },
};

const persistAuthConfig = {
  key: "user",
  storage,
  whitelist: ["authState"],
};

const persistEventsConfig = {
  key: "events",
  storage,
  whitelist: ["events"],
};

const persistCommunitiesConfig = {
  key: "communities",
  storage,
  whitelist: ["communities"],
};

const persistRegisterConfig = {
  key: "registered_user",
  storage,
  whitelist: ["registeredUser"],
};

const store = configureStore({
  reducer: persistCombineReducers(persistAuthConfig, {
    authState: authReducer,
    registerState: persistReducer(persistRegisterConfig, registerReducer),
    eventsState: persistReducer(persistEventsConfig, eventsReducer),
    communitiesState: persistReducer(
      persistCommunitiesConfig,
      communitiesReducer,
    ),
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
    }),
});

export const persistor = persistStore(store);

export default store;
