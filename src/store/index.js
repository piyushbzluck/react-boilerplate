import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";

const store = configureStore({
  reducer: {
    userReducer: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
