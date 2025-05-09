import React from "react";
import { View, StyleSheet, SafeAreaView, Text, ScrollView } from "react-native";
import CustomHeader from "../components/CustomHeader";
import UpcomingsBills from "./dashboardComponents/UpcomingsBills";

const DashboardScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <CustomHeader title="Dashboard" navigation={navigation} />
      <View style={styles.container}>
        <ScrollView>
          <UpcomingsBills />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});
