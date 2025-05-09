import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import {
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const UpcomingsBills = () => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { borderColor: theme.colors.borderColor }]}>
      <Text style={[styles.upcomingText, { color: theme.colors.text }]}>
        Up Coming Bills
      </Text>
      <View style={[styles.wrapper, { borderColor: theme.colors.borderColor }]}>
        <View style={styles.rowBetween}>
          <View style={styles.rowWithGap}>
            <View
              style={[
                styles.iconWrapper,
                { backgroundColor: theme.colors.secondaryBg },
              ]}
            >
              <MaterialCommunityIcons
                name="lightning-bolt-outline"
                size={24}
                color={theme.colors.ldIcon}
              />
            </View>
            <View>
              <Text style={[styles.billName, { color: theme.colors.text }]}>
                Torrent Power
              </Text>
              <Text
                style={[styles.dueDate, { color: theme.colors.dashboardDate }]}
              >
                Due Date : 12 Jan 2022
              </Text>
            </View>
          </View>
          <Text style={[styles.amount, { color: theme.colors.text }]}>
            ₹12,000
          </Text>
        </View>
      </View>
      <View style={[styles.wrapper, { borderColor: theme.colors.borderColor }]}>
        <View style={styles.rowBetween}>
          <View style={styles.rowWithGap}>
            <View
              style={[
                styles.iconWrapper,
                { backgroundColor: theme.colors.secondaryBg },
              ]}
            >
              <Octicons
                name="device-mobile"
                size={24}
                color={theme.colors.ldIcon}
              />
            </View>
            <View>
              <Text style={[styles.billName, { color: theme.colors.text }]}>
                Mobile Recharge
              </Text>
              <Text style={[styles.billName2, { color: theme.colors.text }]}>
                +91-0987654321
              </Text>
              <Text
                style={[styles.dueDate, { color: theme.colors.dashboardDate }]}
              >
                Due Date : 12 Jan 2022
              </Text>
            </View>
          </View>
          <Text style={[styles.amount, { color: theme.colors.text }]}>
            ₹900
          </Text>
        </View>
      </View>
      <View
        style={[styles.wrapper2, { borderColor: theme.colors.borderColor }]}
      >
        <View style={styles.rowBetween}>
          <View style={styles.rowWithGap}>
            <View
              style={[
                styles.iconWrapper,
                { backgroundColor: theme.colors.secondaryBg },
              ]}
            >
              <SimpleLineIcons
                name="credit-card"
                size={24}
                color={theme.colors.ldIcon}
              />
            </View>
            <View>
              <Text style={[styles.billName, { color: theme.colors.text }]}>
                Torrent Power
              </Text>
              <Text
                style={[styles.dueDate, { color: theme.colors.dashboardDate }]}
              >
                Due Date : 12 Jan 2022
              </Text>
            </View>
          </View>
          <Text style={[styles.amount, { color: theme.colors.text }]}>
            ₹16,789
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UpcomingsBills;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 2,
  },
  wrapper: {
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 8,
    borderRadius: 2,
    marginBottom: 16,
  },
  wrapper2: {
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 8,
    borderRadius: 2,
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
});
