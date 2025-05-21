import React, { useEffect, useState } from "react";
import AppNavigation from "./src/navigation";
import { store } from "./src/store/store";
import { Appearance } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import { PaperProvider } from "react-native-paper";
import { setSystemTheme } from "./src/store/themeSlice";
import { lightTheme, darkTheme } from "./src/theme/themes";
import * as Font from "expo-font";
import { SnackbarProvider } from "./src/components/Snackbar";

function MainApp() {
  const dispatch = useDispatch();
  const { mode, systemTheme } = useSelector((state) => state.theme);

  useEffect(() => {
    const sub = Appearance.addChangeListener(({ colorScheme }) => {
      dispatch(setSystemTheme(colorScheme));
    });
    return () => sub.remove();
  }, [dispatch]);

  const theme = (() => {
    if (mode === "light") return lightTheme;
    if (mode === "dark") return darkTheme;
    return systemTheme === "dark" ? darkTheme : lightTheme;
  })();

  return (
    <PaperProvider theme={theme}>
      <SnackbarProvider>
        <AppNavigation />
      </SnackbarProvider>
    </PaperProvider>
  );
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await Font.loadAsync({
          "Lexend-Semibold": require("./src/assets/fonts/Lexend-SemiBold.ttf"),
          "Lexend-Regular": require("./src/assets/fonts/Lexend-Regular.ttf"),
          "Lexend-Light": require("./src/assets/fonts/Lexend-Light.ttf"),
          "Lexend-Bold": require("./src/assets/fonts/Lexend-Bold.ttf"),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts", error);
      }
    })();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
