import React, { useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import Profile from "../screens/Profile";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../theme/themes";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const { mode, systemTheme } = useSelector((state) => state.theme);

  const theme = useMemo(() => {
    if (mode === "light") return lightTheme;
    if (mode === "dark") return darkTheme;
    return systemTheme === "dark" ? darkTheme : lightTheme;
  }, [mode, systemTheme]);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
