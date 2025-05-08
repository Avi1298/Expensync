import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#84E14E",
    text: "#000000",
    background: "#ffffff",
    header: "#4872F4",
    radio: "#4872F4",
    tabBarbackground: "#ffffff",
    deactiveTabBar: "#88908D",
    icons: "#545F5C",
    headerShadow: "#000000",
    secondaryGreen: "#1B4B00",
    lightGreen: "#E7FFDA",
    backIcon: "#475069",
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#84E14E",
    text: "#ffffff",
    background: "#1D1D1D",
    header: "#22303C",
    radio: "#4872F4",
    tabBarbackground: "#1D1D1D",
    deactiveTabBar: "#B3B3B3",
    icons: "#545F5C",
    headerShadow: "#ffffff",
    secondaryGreen: "#1B4B00",
    lightGreen: "#E7FFDA",
    backIcon: "#ffffff",
  },
};
