import React, { useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import Profile from "../screens/Profile";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../theme/themes";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const { mode, systemTheme } = useSelector((state) => state.theme);
  const isAuthenticated = false;

  const theme = useMemo(() => {
    if (mode === "light") return lightTheme;
    if (mode === "dark") return darkTheme;
    return systemTheme === "dark" ? darkTheme : lightTheme;
  }, [mode, systemTheme]);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName={isAuthenticated ? "MainTabs" : "Login"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
