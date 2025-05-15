import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import StatusBadge from "../../components/StatusBadge";
import {
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
  Entypo,
} from "@expo/vector-icons";

const BudgetOverview = () => {
  const theme = useTheme();

  const categories = [
    {
      id: 1,
      name: "Food",
      spent: 2000,
      budget: 3000,
      Icon: Ionicons,
      iconName: "fast-food-outline",
      badgeTitle: "On Track",
      badgeTextColor: theme.colors.badgTextColorGreen,
      badgeBgColor: theme.colors.badgeGreenBg,
    },
    {
      id: 2,
      name: "Transport",
      spent: 1500,
      budget: 2500,
      Icon: MaterialCommunityIcons,
      iconName: "bus",
      badgeTitle: "Over Budget",
      badgeTextColor: theme.colors.badgeTextColorRed,
      badgeBgColor: theme.colors.badgeRedBg,
    },
    {
      id: 3,
      name: "Entertainment",
      spent: 800,
      budget: 2000,
      Icon: Octicons,
      iconName: "video",
      badgeTitle: "Spent",
      badgeTextColor: theme.colors.badgeTextColorYellow,
      badgeBgColor: theme.colors.badgeYellowBg,
    },
    {
      id: 4,
      name: "Utilities",
      spent: 1200,
      budget: 1500,
      Icon: SimpleLineIcons,
      iconName: "energy",
      badgeTitle: "Caution",
      badgeTextColor: theme.colors.badgeTextColorRed,
      badgeBgColor: theme.colors.badgeRedBg,
    },
    {
      id: 5,
      name: "Shopping",
      spent: 3000,
      budget: 4000,
      Icon: MaterialCommunityIcons,
      iconName: "shopping",
      badgeTitle: "On Track",
      badgeTextColor: theme.colors.badgTextColorGreen,
      badgeBgColor: theme.colors.badgeGreenBg,
    },
  ];

  return (
    <View style={[styles.container, { borderColor: theme.colors.borderColor }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Budget Overview
        </Text>
      </View>
      {categories.map((item) => (
        <View
          key={item.id}
          style={[styles.wrapper, { borderColor: theme.colors.borderColor }]}
        >
          <View style={styles.rowBetween}>
            <View style={styles.rowWithGap}>
              <View
                style={[
                  styles.iconWrapper,
                  { backgroundColor: theme.colors.secondaryBg },
                ]}
              >
                <item.Icon
                  name={item.iconName}
                  size={24}
                  color={theme.colors.ldIcon}
                />
              </View>
              <View>
                <Text style={[styles.billName, { color: theme.colors.text }]}>
                  {item.name}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={[styles.dueDate, { color: theme.colors.text }]}>
                    ₹{item.spent}
                  </Text>
                  <Text
                    style={[
                      styles.dueDate,
                      { color: theme.colors.deactiveTabBar },
                    ]}
                  >
                    /₹{item.budget}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <StatusBadge
                label={item.badgeTitle}
                textColor={item.badgeTextColor}
                backgroundColor={item.badgeBgColor}
              />

              <Entypo
                name="dots-three-vertical"
                size={16}
                color={theme.colors.ldIcon}
              />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default BudgetOverview;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 2,
    marginTop: 10,
  },
  wrapper: {
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 8,
    borderRadius: 2,
    marginVertical: 5,
  },
  upcomingText: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Lexend-Regular",
    marginBottom: 10,
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowWithGap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  iconWrapper: {
    height: 34,
    width: 34,
    padding: 5,
    alignItems: "center",
  },
  billName: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Lexend-Regular",
  },
  billName2: {
    fontSize: 14,
    fontWeight: "200",
    fontFamily: "Lexend-ExtraLight",
    marginVertical: 1,
  },
  dueDate: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "Lexend-Regular",
  },
  amount: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Lexend-Regular",
  },
  header: {
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Lexend-Regular",
  },
});
