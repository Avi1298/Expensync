import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { useTheme } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import SingleButton from "../../components/SingleButton";
import RenderInput from "../../components/RenderInput";
import Logo from "../../assets/images/Logo";
import GoogleLogo from "../../assets/images/GoogleLogo";
import AppleLogo from "../../assets/images/AppleLogo";
import FacebookLogo from "../../assets/images/FacebookLogo";
import useUserActions from "../../store/actions/userActions";
import { useSelector } from "react-redux";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email or Mobile is required"),
  password: Yup.string().required("Password is required"),
});

const Login = ({ navigation }) => {
  const theme = useTheme();
  const { login } = useUserActions();
  const { loading } = useSelector((s) => s.auth);

  const handleLoginSubmit = async (values, { setSubmitting }) => {
    try {
      await login(values);
    } catch (error) {
    } finally {
      setSubmitting(false);
    }
  };

  const OrDivider = () => (
    <View style={styles.containerDivider}>
      <View style={styles.line} />
      <Text style={styles.orText}>Or</Text>
      <View style={styles.line} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
      )}
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

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleLoginSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
          isSubmitting,
          submitCount,
        }) => (
          <>
            <View style={{ marginTop: 45 }}>
              <RenderInput
                name="email"
                label="Enter Email Or Mobile Number"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                error={submitCount > 0 && errors.email}
              />
              <RenderInput
                name="password"
                label="Password"
                isPassword
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                error={submitCount > 0 && errors.password}
              />
            </View>

            <TouchableOpacity
              style={styles.forgotPass}
              onPress={() => navigation.navigate("ForgotPass")}
            >
              <Text
                style={{
                  fontFamily: "Lexend-Regular",
                  color: theme.colors.primary,
                }}
              >
                Forgot Password
              </Text>
            </TouchableOpacity>

            <SingleButton
              text="Login"
              disabled={!isValid || isSubmitting}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>

      <View style={styles.signTextWrapper}>
        <Text style={[styles.signUpTextPrimary, { color: theme.colors.text }]}>
          Doesn’t Have An Account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={[styles.signupText, { color: theme.colors.primary }]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>

      <OrDivider />

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
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
});
