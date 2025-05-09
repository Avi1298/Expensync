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

const ResetPassword = ({ navigation }) => {
  const theme = useTheme();
  const [password, setPassword] = useState("");
  const isFormValid = password.trim() !== "";
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
          Reset Your Password
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
          label="Enter password"
          isPassword
          value={password}
          onChangeText={setPassword}
        />
        <RenderInput
          label="Re-enter password"
          isPassword
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <SingleButton
        text="Back To Login"
        disabled={!isFormValid}
        onPress={() => navigation.navigate("Login")}
      />
    </SafeAreaView>
  );
};

export default ResetPassword;

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
});
