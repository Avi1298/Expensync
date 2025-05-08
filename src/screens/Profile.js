import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../store/themeSlice";
import { useTheme } from "react-native-paper";
import { Appearance } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.theme);
  const theme = useTheme();

  const [systemTheme, setSystemTheme] = useState(Appearance.getColorScheme());

  const handleThemeChange = (selectedMode) => {
    if (selectedMode === "system") {
      dispatch(setMode("system"));
    } else {
      dispatch(setMode(selectedMode));
    }
  };

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setSystemTheme(colorScheme);
      if (mode === "system") {
        dispatch(setMode(colorScheme));
      }
    });
    return () => subscription.remove();
  }, [mode]);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons
          name={"arrow-back-outline"}
          size={24}
          color={theme.colors.backIcon}
        />
      </TouchableOpacity>
      <Text style={[styles.title, { color: theme.colors.text }]}>
        Appearance
      </Text>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: theme.colors.lightGreen },
            mode === "light" && { backgroundColor: theme.colors.primary },
          ]}
          onPress={() => handleThemeChange("light")}
        >
          <Text
            style={[
              styles.buttonText,
              mode === "light" && { color: "#1C1C1C" },
              { color: theme.colors.secondaryGreen },
            ]}
          >
            Light
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: theme.colors.lightGreen },
            mode === "dark" && { backgroundColor: theme.colors.primary },
          ]}
          onPress={() => handleThemeChange("dark")}
        >
          <Text
            style={[
              styles.buttonText,
              mode === "dark" && { color: "#1C1C1C" },
              { color: theme.colors.secondaryGreen },
            ]}
          >
            Dark
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: theme.colors.lightGreen },
            mode === "system" && { backgroundColor: theme.colors.primary },
          ]}
          onPress={() => handleThemeChange("system")}
        >
          <Text
            style={[
              styles.buttonText,
              mode === "system" && { color: "#1C1C1C" },
              { color: theme.colors.secondaryGreen },
            ]}
          >
            System
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 12,
    marginTop: 16,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 2,
    width: "30%",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "500",
  },
});
