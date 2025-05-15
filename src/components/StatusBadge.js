import React from "react";
import { Text, View, StyleSheet } from "react-native";

const StatusBadge = ({
  label = "Status",
  textColor = "#008000",
  backgroundColor = "#d4f7d4",
}) => {
  return (
    <View style={[styles.badgeContainer, { backgroundColor }]}>
      <Text style={[styles.badgeText, { color: textColor }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "Lexend-Regular",
  },
});

export default StatusBadge;
