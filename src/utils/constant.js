import { Platform } from "react-native";

const DEV_URL = "http://192.168.20.132:5000";
export const SITE_URL = DEV_URL;
export const BASE_API_URL = `${SITE_URL}/api/`;

export const KEYBOARD_SHOW =
  Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
export const KEYBOARD_HIDE =
  Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";
