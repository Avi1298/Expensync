import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, useTheme } from "react-native-paper";

const SingleButton = ({ text = "Save", onPress, disabled }) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        style={styles.button}
        labelStyle={[
          styles.label,
          {
            color: disabled
              ? theme.colors.disableText
              : theme.colors.secondaryGreen,
          },
        ]}
        onPress={disabled ? null : onPress}
        disabled={disabled}
      >
        {text}
      </Button>
    </View>
  );
};

export default SingleButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 5,
    paddingTop: 10,
  },
  button: {
    alignSelf: "stretch",
    borderRadius: 2,
    paddingVertical: 0,
    minHeight: 33,
  },
  label: {
    fontSize: 14,
    fontFamily: "Lexend-Regular",
  },
});
