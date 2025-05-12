import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";

const Expenses = () => {
  const theme = useTheme();

  const expenseData = [
    {
      title: "Torrent Power",
      amount: "-₹2000",
      iconName: "lightning-bolt-outline",
    },
    {
      title: "Netflix Subscription",
      amount: "-₹499",
      iconName: "netflix",
    },
    {
      title: "Mobile Recharge",
      amount: "-₹399",
      iconName: "cellphone",
    },
    {
      title: "Groceries",
      amount: "-₹3200",
      iconName: "cart-outline",
    },
    {
      title: "Internet Bill",
      amount: "-₹999",
      iconName: "wifi",
    },
    {
      title: "Amazon Order",
      amount: "-₹1599",
      iconName: "package-variant",
    },
  ];

  return (
    <View style={[styles.wrapper, { borderColor: theme.colors.borderColor }]}>
      <View style={styles.headerRow}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Expenses
        </Text>
        <Text style={[styles.title, { color: theme.colors.primary }]}>
          View All
        </Text>
      </View>

      {expenseData.map((item, index) => (
        <View
          key={index}
          style={[
            styles.expenseCard,
            { borderColor: theme.colors.borderColor },
          ]}
        >
          <View style={styles.rowBetween}>
            <View style={styles.rowWithGap}>
              <View
                style={[
                  styles.iconWrapper,
                  { backgroundColor: theme.colors.secondaryBg },
                ]}
              >
                <MaterialCommunityIcons
                  name={item.iconName}
                  size={22}
                  color={theme.colors.ldIcon}
                />
              </View>
              <View>
                <Text style={[styles.billName, { color: theme.colors.text }]}>
                  {item.title}
                </Text>
                <Text
                  style={[
                    styles.dueDate,
                    { color: theme.colors.expenseCircle },
                  ]}
                >
                  {item.amount}
                </Text>
              </View>
            </View>
            <EvilIcons
              name="chevron-right"
              size={24}
              color={theme.colors.ldIcon}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default Expenses;

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 2,
    marginTop: 10,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontFamily: "Lexend-Regular",
    fontWeight: "400",
  },
  expenseCard: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 2,
    marginTop: 10,
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
    justifyContent: "center",
  },
  billName: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Lexend-Regular",
  },
  dueDate: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "Lexend-Regular",
  },
});
