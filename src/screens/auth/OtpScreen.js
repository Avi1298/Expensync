import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import SingleButton from "../../components/SingleButton";
import Logo from "../../assets/images/Logo";
import { OtpInput } from "react-native-otp-entry";

const OtpScreen = ({ navigation }) => {
  const theme = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.headerContaier}>
        <Text
          style={[
            styles.headingText,
            { color: theme.colors.headerText, fontFamily: "Lexend-Regular" },
          ]}
        >
          Enter OTP
        </Text>
        <Text
          style={[
            styles.secondaryHeaderText,
            { color: theme.colors.headerText },
          ]}
        >
          We’ve sent a 6-digit code to your.
        </Text>
        <Text
          style={{ color: theme.colors.primary, fontFamily: "Lexend-Regular" }}
        >
          kami123@gmail.com
        </Text>
        <Text
          style={{
            fontFamily: "Lexend-Regular",
            color: theme.colors.headerText,
          }}
        >
          Enter it below to continue.
        </Text>
      </View>

      <View style={{ marginTop: 25 }}>
        <OtpInput
          type="numeric"
          theme={{
            pinCodeContainerStyle: styles.pinCodeContainer,
            pinCodeTextStyle: [
              styles.pinCodeText,
              { color: theme.colors.headerText },
            ],
          }}
        />
      </View>

      <TouchableOpacity>
        <Text style={[styles.signupText, { color: theme.colors.primary }]}>
          Resend OTP
        </Text>
      </TouchableOpacity>

      <View style={{ marginTop: 25 }}></View>
      <SingleButton
        text="Verify"
        onPress={() => navigation.navigate("ResetPass")}
      />
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  headerContaier: {
    alignItems: "center",
  },
  headingText: {
    fontSize: 18,
    fontWeight: "400",
  },
  secondaryHeaderText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Lexend-Regular",
  },
  logo: {
    alignItems: "center",
    marginRight: "10%",
    marginBottom: 18,
    marginTop: 18,
  },
  pinCodeContainer: {
    borderRadius: 2,
    height: 40,
    width: 48,
  },
  pinCodeText: {
    fontSize: 16,
    fontFamily: "Lexend-Regular",
  },
  signupText: {
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "Lexend-Regular",
    marginLeft: 10,
    alignSelf: "flex-end",
    marginTop: 15,
  },
});
