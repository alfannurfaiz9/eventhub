import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import eventsReducer from "./slices/eventsSlice";
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
  whitelist: ["user"],
};

const store = configureStore({
  reducer: {
    authState: persistReducer(persistAuthConfig, authReducer),
    registerState: registerReducer,
    eventsState: eventsReducer,
    communitiesState: communitiesReducer,
  },
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
