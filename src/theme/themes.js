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
    borderColor: "#E6E6E6",
    secondaryBg: "#EAEFED",
    ldIcon: "#1B4B00",
    dashboardDate: "#D9A200",
    expenseCircle: "#BE242B",
    incomeCircle: "#28B446",
    badgTextColorGreen: "#078800",
    badgeGreenBg: "#E2FFE0",
    badgeTextColorRed: "#C50303",
    badgeRedBg: "#FFDDDD",
    badgeTextColorYellow: "#7B7500",
    badgeYellowBg: "#FFFFE1",
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
    borderColor: "#262626",
    secondaryBg: "#1B2320",
    ldIcon: "#CAF8EE",
    dashboardDate: "#F3B600",
    expenseCircle: "#FF1919",
    incomeCircle: "#1BA96E",
    badgTextColorGreen: "#0DFF00",
    badgeGreenBg: "#2A3631",
    badgeTextColorRed: "#FF1919",
    badgeRedBg: "#362B2B",
    badgeTextColorYellow: "#FFF200",
    badgeYellowBg: "#2F2D25",
  },
});
