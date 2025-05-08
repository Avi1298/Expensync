import React from "react";
import { View, StyleSheet } from "react-native";
import CustomHeader from "../components/CustomHeader";

const DashboardScreen = ({ navigation }) => {
  return (
    <View>
      <CustomHeader title="Dashboard" navigation={navigation} />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({});
