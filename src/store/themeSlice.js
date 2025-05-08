import { createSlice } from "@reduxjs/toolkit";
import { Appearance } from "react-native";

const initialState = {
  mode: "system",
  systemTheme: Appearance.getColorScheme() || "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    setSystemTheme: (state, action) => {
      state.systemTheme = action.payload;
    },
  },
});

export const { setMode, setSystemTheme } = themeSlice.actions;
export default themeSlice.reducer;
