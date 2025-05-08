import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import SingleButton from "../../components/SingleButton";
import RenderInput from "../../components/RenderInput";
import Logo from "../../assets/images/Logo";

const Login = () => {
  const theme = useTheme();
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = emailOrMobile.trim() !== "" && password.trim() !== "";

  const OrDivider = () => {
    return (
      <View style={styles.containerDivider}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.line} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
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
          Welcome Back !
        </Text>
        <Text
          style={[
            styles.secondaryHeaderText,
            { color: theme.colors.headerText },
          ]}
        >
          Log in to take control of your money.
        </Text>
      </View>

      <View style={{ marginTop: 45 }}>
        <RenderInput
          label="Enter Email Or Mobile Number"
          value={emailOrMobile}
          onChangeText={setEmailOrMobile}
        />
        <RenderInput
          label="Password"
          isPassword
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.forgotPass}>
        <Text
          style={{ fontFamily: "Lexend-Regular", color: theme.colors.primary }}
        >
          Forgot Password
        </Text>
      </TouchableOpacity>

      <SingleButton text="Login" disabled={!isFormValid} />
      <View style={styles.signTextWrapper}>
        <Text style={[styles.signUpTextPrimary, { color: theme.colors.text }]}>
          Doesn’t Have An Account?
        </Text>
        <Text style={[styles.signupText, { color: theme.colors.primary }]}>
          Sign Up
        </Text>
      </View>
      <View>
        <OrDivider />
      </View>
    </View>
  );
};

export default Login;

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
  forgotPass: {
    alignSelf: "flex-end",
    paddingVertical: 10,
  },
  signupText: {
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "Lexend-Regular",
    marginLeft: 10,
  },
  signUpTextPrimary: {
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "Lexend-Regular",
  },
  signTextWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  containerDivider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 0,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#D6D6D6",
  },
  orText: {
    marginHorizontal: 10,
    fontFamily: "Lexend-Regular",
    color: "#D6D6D6",
    fontWeight: "400",
  },
});
