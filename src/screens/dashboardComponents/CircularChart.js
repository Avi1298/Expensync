import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "react-native-paper";

const { height } = Dimensions.get("window");

const Chart = ({
  income = 100000,
  expense = 103122,
  radius = 100,
  strokeWidth = 20,
  gapBetweenArcs = 4,
  fontSize = 12,
  fontWeight = "400",
  theme,
}) => {
  const incomeColor = theme.colors.incomeCircle;
  const expenseColor = theme.colors.expenseCircle;

  const innerRadius = radius - strokeWidth - gapBetweenArcs;
  const startAngle = -180;
  const endAngle = 85;

  const polarToCartesian = (radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    const x = radius + radius * Math.cos(angleInRadians);
    const y = radius + radius * Math.sin(angleInRadians);
    return { x, y };
  };

  const createArcPath = (r, startAngleArg, endAngleArg) => {
    const start = polarToCartesian(r, startAngleArg);
    const end = polarToCartesian(r, endAngleArg);
    const largeArcFlag = endAngleArg - startAngleArg <= 180 ? "0" : "1";

    return [
      "M",
      start.x,
      start.y,
      "A",
      r,
      r,
      0,
      largeArcFlag,
      1,
      end.x,
      end.y,
    ].join(" ");
  };

  const viewBoxSize = (radius + strokeWidth) * 2;

  return (
    <View style={[styles.container, { padding: radius / 5 }]}>
      <Svg
        width={viewBoxSize}
        height={viewBoxSize}
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      >
        {/* Outer arc (Expense) */}
        <Path
          d={createArcPath(radius, startAngle, endAngle)}
          stroke={expenseColor}
          strokeWidth={strokeWidth}
          fill="none"
          transform={`translate(${strokeWidth},${strokeWidth})`}
        />

        {/* Inner arc (Income) */}
        <Path
          d={createArcPath(innerRadius, startAngle, endAngle)}
          stroke={incomeColor}
          strokeWidth={strokeWidth}
          fill="none"
          transform={`translate(${strokeWidth + (radius - innerRadius)},${
            strokeWidth + (radius - innerRadius)
          })`}
        />
      </Svg>

      <View
        style={[
          styles.legendContainer,
          { marginTop: height * 0.23, marginRight: -70 },
        ]}
      >
        <Text
          style={[
            styles.incomeText,
            { fontSize: fontSize, fontWeight: fontWeight },
          ]}
        >
          + ₹{income.toLocaleString()}
        </Text>
        <Text
          style={[
            styles.expenseText,
            { fontSize: fontSize, fontWeight: fontWeight },
          ]}
        >
          - ₹{expense.toLocaleString()}
        </Text>
      </View>
    </View>
  );
};

const CircularChart = () => {
  const theme = useTheme();
  return (
    <View style={[styles.wrapper, { borderColor: theme.colors.borderColor }]}>
      <View>
        <Text style={[styles.totalMoney, { color: theme.colors.text }]}>
          Total Money
        </Text>
        <Text style={[styles.money, { color: theme.colors.text }]}>
          ₹100,000,000
        </Text>
      </View>

      <Chart theme={theme} />

      <View style={styles.legendRow}>
        <View style={styles.legendItem}>
          <View
            style={[
              styles.legendColorBox,
              { backgroundColor: theme.colors.incomeCircle },
            ]}
          />
          <Text style={[styles.legendText, { color: theme.colors.icons }]}>
            Income
          </Text>
        </View>
        <View style={styles.legendItem}>
          <View
            style={[
              styles.legendColorBox,
              { backgroundColor: theme.colors.expenseCircle },
            ]}
          />
          <Text style={[styles.legendText, { color: theme.colors.icons }]}>
            Expense
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 2,
    marginTop: 10,
  },
  legendContainer: {
    position: "absolute",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  incomeText: {
    color: "#4CAF50",
    marginBottom: 5,
    fontFamily: "Lexend-Regular",
  },
  expenseText: {
    color: "#FF4444",
    fontFamily: "Lexend-Regular",
  },
  totalMoney: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Lexend-Regular",
  },
  money: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Lexend-Light",
  },
  legendRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  legendColorBox: {
    height: 10,
    width: 10,
  },
  legendText: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Lexend-Light",
  },
});

export default CircularChart;
