import React, { useState, useEffect } from "react";
import { Keyboard, Text } from "react-native";
import { Snackbar } from "react-native-paper";
import { KEYBOARD_HIDE, KEYBOARD_SHOW } from "../../utils/constant";

function CustomSnackbar(props) {
  const { open, message, variant, onClose, action, autoHideDuration } = props;
  const [margin, setMargin] = useState(8);

  const VariantColors = {
    success: { background: "#078800", text: "#fff" },
    error: { background: "#BE242B", text: "#fff" },
    warning: { background: "#F3B600", text: "#000" },
  };

  const currentColors = VariantColors[variant] || VariantColors.success;

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      KEYBOARD_SHOW,
      _keyboardDidShow
    );
    const hideSubscription = Keyboard.addListener(
      KEYBOARD_HIDE,
      _keyboardDidHide
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const _keyboardDidShow = (e) => setMargin(e.endCoordinates.height + 30);
  const _keyboardDidHide = () => setMargin(8);

  return (
    <Snackbar
      visible={open}
      style={{
        marginBottom: margin,
        backgroundColor: currentColors.background,
      }}
      duration={autoHideDuration}
      onDismiss={onClose}
      action={action}
      theme={{
        colors: {
          onSurface: currentColors.text,
          accent: currentColors.text,
        },
      }}
    >
      <Text
        style={{
          color: currentColors.text,
          fontFamily: "Lexend-Regular",
          fontSize: 14,
        }}
      >
        {message}
      </Text>
    </Snackbar>
  );
}

CustomSnackbar.defaultProps = {
  variant: "success",
  autoHideDuration: 4000,
  message: "This is a snackbar",
  open: false,
};

export default CustomSnackbar;
