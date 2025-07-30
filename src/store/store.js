import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import user from "./reducers/user";
import chatReducer from "./chatSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: user,
    chat: chatReducer,
  },
});
