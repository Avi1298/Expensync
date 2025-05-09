import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import SingleButton from "../../components/SingleButton";
import RenderInput from "../../components/RenderInput";
import Logo from "../../assets/images/Logo";

const ForgotPassword = ({ navigation }) => {
  const theme = useTheme();
  const [emailOrMobile, setEmailOrMobile] = useState("");

  const isFormValid = emailOrMobile.trim() !== "";

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
          Forgot Password
        </Text>
        <Text
          style={[
            styles.secondaryHeaderText,
            { color: theme.colors.headerText },
          ]}
        >
          Enter your email or mobile number to get OTP to reset password
        </Text>
      </View>

      <View style={{ marginTop: 45 }}>
        <RenderInput
          label="Enter Email Or Mobile Number"
          value={emailOrMobile}
          onChangeText={setEmailOrMobile}
        />
      </View>
      <SingleButton
        text="Get OTP"
        disabled={!isFormValid}
        onPress={() => navigation.navigate("getOtp")}
      />
    </SafeAreaView>
  );
};

export default ForgotPassword;

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
});
