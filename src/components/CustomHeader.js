import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Divider, useTheme } from "react-native-paper";

const CustomHeader = ({ title = "Screen", navigation }) => {
  const theme = useTheme();
  return (
    <>
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: theme.colors.background,
            ...Platform.select({
              ios: {
                shadowColor: theme.colors.text,
                shadowOffset: { width: 0, height: 3.5 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
              },
              android: { elevation: 5 },
            }),
          },
        ]}
      >
        <Text style={[styles.title, { color: theme.colors.text }]}>
          {title}
        </Text>

        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>
            <Ionicons
              name="search-outline"
              size={22}
              color={theme.colors.icons}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon}>
            <Ionicons
              name="notifications-outline"
              size={22}
              color={theme.colors.icons}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <View
              style={[
                styles.avatarBorder,
                { borderColor: theme.colors.primary },
              ]}
            >
              <Image
                source={{ uri: "https://i.pravatar.cc/150?img=12" }}
                style={styles.avatar}
              />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <View style={styles.shadowContainer}>
        <Divider />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "Lexend-Regular",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 10,
  },
  avatarBorder: {
    borderWidth: 2,
    borderRadius: 20,
    padding: 2,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  shadowContainer: {
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});

export default CustomHeader;
