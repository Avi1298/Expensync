import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import user from "./reducers/user";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: user,
  },
});
