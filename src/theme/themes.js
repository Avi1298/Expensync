import {
  MD3DarkTheme,
  MD3LightTheme,
  configureFonts,
} from "react-native-paper";
import merge from "deepmerge";

const fontConfig = {
  default: {
    regular: {
      fontFamily: "Lexend-Regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "Lexend-Semibold",
      fontWeight: "normal",
    },
    bold: {
      fontFamily: "Lexend-Bold",
      fontWeight: "bold",
    },
  },
};

const customFontConfig = configureFonts({
  web: fontConfig,
  ios: fontConfig,
  android: fontConfig,
});

export const lightTheme = merge(MD3LightTheme, {
  ...MD3LightTheme,
  fonts: customFontConfig,
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
    headerText: "#202422",
    disableText: "#1B4B00",
  },
});

export const darkTheme = merge(MD3DarkTheme, {
  ...MD3DarkTheme,
  fonts: customFontConfig,
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
    headerText: "#DBDFDE",
    disableText: "#ffffff",
  },
});
