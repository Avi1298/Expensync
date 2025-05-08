import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "react-native-paper";
import DashboardScreen from "../screens/DashboardScreen";
import ExpenseScreen from "../screens/ExpenseScreen";
import BudgetScreen from "../screens/BudgetScreen";
import BillsScreen from "../screens/BillsScreen";
import AccountsScreen from "../screens/AccountsScreen";
import {
  Ionicons,
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const IndicatorWrapper = ({ focused, children, theme }) => (
  <View style={{ alignItems: "center" }}>
    {focused && (
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: theme.colors.primary,
          position: "absolute",
          top: -6,
          borderRadius: 8,
        }}
      />
    )}
    {children}
  </View>
);

const BottomTabNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.deactiveTabBar,
        headerShown: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: theme.colors.tabBarbackground,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          paddingBottom: 4,
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <IndicatorWrapper focused={focused} theme={theme}>
              <MaterialCommunityIcons
                name={focused ? "view-dashboard" : "view-dashboard-outline"}
                size={size}
                color={color}
              />
            </IndicatorWrapper>
          ),
        }}
      />
      <Tab.Screen
        name="Expense"
        component={ExpenseScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <IndicatorWrapper focused={focused} theme={theme}>
              <FontAwesome6 name="sack-dollar" size={size} color={color} />
            </IndicatorWrapper>
          ),
        }}
      />
      <Tab.Screen
        name="Budget"
        component={BudgetScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <IndicatorWrapper focused={focused} theme={theme}>
              <Ionicons
                name={focused ? "calendar-number" : "calendar-number-outline"}
                size={size}
                color={color}
              />
            </IndicatorWrapper>
          ),
        }}
      />
      <Tab.Screen
        name="Accounts"
        component={AccountsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <IndicatorWrapper focused={focused} theme={theme}>
              <MaterialIcons name="account-balance" size={size} color={color} />
            </IndicatorWrapper>
          ),
        }}
      />
      <Tab.Screen
        name="Bills"
        component={BillsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <IndicatorWrapper focused={focused} theme={theme}>
              <FontAwesome6 name="receipt" size={size} color={color} />
            </IndicatorWrapper>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
