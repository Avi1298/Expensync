import React, { useEffect } from "react";
import AppNavigation from "./src/navigation";
import { store } from "./src/store/store";
import { Appearance } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import { PaperProvider } from "react-native-paper";
import { setSystemTheme } from "./src/store/themeSlice";
import { lightTheme, darkTheme } from "./src/theme/themes";

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
      <AppNavigation />
    </PaperProvider>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
