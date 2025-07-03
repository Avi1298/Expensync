import React, { useMemo, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import Profile from "../screens/Profile";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../theme/themes";
import ForgotPassword from "../screens/auth/ForgotPassword";
import OtpScreen from "../screens/auth/OtpScreen";
import ResetPassword from "../screens/auth/ResetPassword";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const { mode, systemTheme } = useSelector((state) => state.theme);
  const { authenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("Authenticated after login:", authenticated);
  }, [authenticated]);

  const theme = useMemo(() => {
    if (mode === "light") return lightTheme;
    if (mode === "dark") return darkTheme;
    return systemTheme === "dark" ? darkTheme : lightTheme;
  }, [mode, systemTheme]);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        key={authenticated ? "auth" : "guest"}
      >
        {authenticated ? (
          <Stack.Group>
            <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ForgotPass" component={ForgotPassword} />
            <Stack.Screen name="getOtp" component={OtpScreen} />
            <Stack.Screen name="ResetPass" component={ResetPassword} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
