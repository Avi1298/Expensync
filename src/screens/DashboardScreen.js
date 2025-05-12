import React from "react";
import { View, StyleSheet, SafeAreaView, Text, ScrollView } from "react-native";
import CustomHeader from "../components/CustomHeader";
import UpcomingsBills from "./dashboardComponents/UpcomingsBills";
import CircularChart from "./dashboardComponents/CircularChart";
import Expenses from "./dashboardComponents/Expenses";

const DashboardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader title="Dashboard" navigation={navigation} />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <UpcomingsBills />
          <CircularChart />
          <Expenses />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  scrollContent: {
    // paddingBottom: 10,
  },
});
