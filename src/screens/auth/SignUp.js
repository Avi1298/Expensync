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
import RenderInput from "../../components/RenderInput";
import Logo from "../../assets/images/Logo";
import GoogleLogo from "../../assets/images/GoogleLogo";
import AppleLogo from "../../assets/images/AppleLogo";
import FacebookLogo from "../../assets/images/FacebookLogo";

const SignUp = ({ navigation }) => {
  const theme = useTheme();
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [name, setName] = useState("");

  const isFormValid = emailOrMobile.trim() !== "" && name.trim() !== "";

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
          Let’s Get Started
        </Text>
        <Text
          style={[
            styles.secondaryHeaderText,
            { color: theme.colors.headerText },
          ]}
        >
          Create your account and start managing your money smarter.
        </Text>
      </View>

      <View style={{ marginTop: 45 }}>
        <RenderInput
          label="Enter Your Name"
          value={name}
          onChangeText={setName}
        />
        <RenderInput
          label="Enter Email Or Mobile Number"
          value={emailOrMobile}
          onChangeText={setEmailOrMobile}
        />
      </View>
      <SingleButton
        text="Sign Up"
        disabled={!isFormValid}
        onPress={() => navigation.navigate("Login")}
      />
      <View style={styles.signTextWrapper}>
        <Text style={[styles.signUpTextPrimary, { color: theme.colors.text }]}>
          Already Have An Account ?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={[styles.signupText, { color: theme.colors.primary }]}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <OrDivider />
      </View>

      <View>
        <TouchableOpacity
          style={[styles.googleOpacity, { borderColor: theme.colors.primary }]}
        >
          <GoogleLogo />
          <Text
            style={[styles.googleText, { color: theme.colors.disableText }]}
          >
            Continue with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.AppleOpacity, { borderColor: theme.colors.primary }]}
        >
          <AppleLogo />
          <Text
            style={[styles.googleText, { color: theme.colors.disableText }]}
          >
            Continue with Apple
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.facebookOpacity,
            { borderColor: theme.colors.primary },
          ]}
        >
          <FacebookLogo />
          <Text
            style={[styles.googleText, { color: theme.colors.disableText }]}
          >
            Continue with Facebook
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

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
  googleOpacity: {
    paddingHorizontal: 16,
    borderWidth: 1,
    paddingVertical: 8,
    borderRadius: 2,
    flexDirection: "row",
    gap: 70,
    marginVertical: 16,
    alignItems: "center",
  },
  AppleOpacity: {
    paddingHorizontal: 16,
    borderWidth: 1,
    paddingVertical: 6,
    borderRadius: 2,
    flexDirection: "row",
    gap: 80,
    alignItems: "center",
  },
  facebookOpacity: {
    paddingHorizontal: 16,
    borderWidth: 1,
    paddingVertical: 6,
    borderRadius: 2,
    flexDirection: "row",
    gap: 70,
    alignItems: "center",
    marginVertical: 16,
    alignItems: "center",
  },
  googleText: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Lexend-Regular",
  },
});
