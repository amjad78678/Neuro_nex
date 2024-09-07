import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
