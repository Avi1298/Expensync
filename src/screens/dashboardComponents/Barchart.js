import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BarChart } from "react-native-gifted-charts";
import { Divider, useTheme } from "react-native-paper";

const Barchart = () => {
  const theme = useTheme();
  const barData = [
    { value: 3000, label: "Food" },
    { value: 7000, label: "Rent" },
    { value: 1200, label: "Other" },
    { value: 8000, label: "Fuel" },
    { value: 3000, label: "Bills" },
  ];

  return (
    <View style={[styles.wrapper, { borderColor: theme.colors.borderColor }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Budget Report
        </Text>
      </View>
      <BarChart
        barWidth={16}
        noOfSections={5}
        maxValue={10000}
        data={barData}
        isAnimated
        frontColor={theme.colors.incomeCircle}
        yAxisTextStyle={{
          ...styles.axisText,
          color: theme.colors.deactiveTabBar,
        }}
        yAxisLabelTexts={[
          "₹0",
          "₹2,000",
          "₹4,000",
          "₹6,000",
          "₹8,000",
          "₹10,000",
        ]}
        xAxisLabelTextStyle={{
          ...styles.axisText,
          color: theme.colors.deactiveTabBar,
        }}
        spacing={35}
        yAxisLabelWidth={60}
        endSpacing={16}
        rulesColor={theme.colors.deactiveTabBar}
        yAxisColor={theme.colors.deactiveTabBar}
        xAxisColor={theme.colors.deactiveTabBar}
      />
      <View style={styles.summary}>
        <View style={styles.row}>
          <Text
            style={[styles.labelText, { color: theme.colors.deactiveTabBar }]}
          >
            Total Budget
          </Text>
          <Text
            style={[styles.valueText, { color: theme.colors.incomeCircle }]}
          >
            ₹100,000,000
          </Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.row}>
          <Text
            style={[styles.labelText, { color: theme.colors.deactiveTabBar }]}
          >
            Spent
          </Text>
          <Text
            style={[styles.valueText, { color: theme.colors.expenseCircle }]}
          >
            ₹100,000
          </Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.row}>
          <Text
            style={[styles.labelText, { color: theme.colors.deactiveTabBar }]}
          >
            Remaining
          </Text>
          <Text
            style={[styles.valueText, { color: theme.colors.dashboardDate }]}
          >
            ₹100,000,000
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Barchart;

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 2,
    marginTop: 10,
  },
  header: {
    marginBottom: 18,
  },
  title: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Lexend-Regular",
  },
  axisText: {
    fontFamily: "Lexend-Regular",
    fontSize: 10,
    fontWeight: "400",
  },
  summary: {
    marginTop: 18,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  labelText: {
    fontFamily: "Lexend-Light",
    fontSize: 14,
    fontWeight: "300",
  },
  valueText: {
    fontFamily: "Lexend-Regular",
    fontSize: 14,
    fontWeight: "400",
  },
  divider: {
    marginVertical: 10,
  },
});
