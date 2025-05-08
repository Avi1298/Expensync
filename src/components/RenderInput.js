import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput, useTheme } from "react-native-paper";

const RenderInput = ({ label, value, onChangeText, isPassword = false }) => {
  const theme = useTheme();
  const [secureText, setSecureText] = useState(isPassword);

  const borderColor = "#D6D6D6";

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: theme.colors.icons }]}>{label}</Text>
      <TextInput
        mode="outlined"
        style={[styles.input, { backgroundColor: theme.colors.background }]}
        dense
        secureTextEntry={secureText}
        value={value}
        onChangeText={onChangeText}
        right={
          isPassword && (
            <TextInput.Icon
              icon={secureText ? "eye-off" : "eye"}
              onPress={() => setSecureText(!secureText)}
              color={borderColor}
            />
          )
        }
        theme={{
          roundness: 2,
          colors: {
            primary: borderColor,
            underlineColor: "transparent",
          },
        }}
      />
    </View>
  );
};

export default RenderInput;

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: "300",
    fontFamily: "Lexend-Regular",
  },
  input: {
    marginBottom: 12,
  },
});
