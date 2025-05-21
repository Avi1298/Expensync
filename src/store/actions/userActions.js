import { useDispatch } from "react-redux";
import useAuth from "../../services/user";
import * as types from "./actionTypes";
import { useSnackbar } from "../../components/Snackbar";

export default function useUserActions() {
  const dispatch = useDispatch();
  const { login, signUp } = useAuth();

  const snackbar = useSnackbar();

  return {
    signUp: async (params) => {
      try {
        const response = await signUp(params);
        const { token, user } = response;

        dispatch({
          type: types.SIGN_UP_SUCCESS,
          payload: { user, token },
        });

        snackbar.showMessage({
          message: "Signup successful!",
          variant: "success",
        });

        return { user, token };
      } catch (error) {
        const messageFromAPI =
          error?.response?.data?.message || "Signup failed";
        snackbar.showMessage({
          message: messageFromAPI,
          variant: "error",
        });
        dispatch({
          type: types.SIGN_UP_FAILURE,
          payload: error.message || "Sign up failed",
        });
        throw error;
      }
    },

    login: async (data) => {
      dispatch({ type: types.LOGIN_REQUEST });
      try {
        const response = await login(data);
        const { token, user } = response;

        dispatch({ type: types.LOGIN_SUCCESS, payload: { user, token } });
        snackbar.showMessage({
          message: "Login successful!",
          variant: "success",
        });
        return { user, token };
      } catch (error) {
        const messageFromAPI = error?.response?.data?.message || "Login failed";
        snackbar.showMessage({
          message: messageFromAPI,
          variant: "error",
        });
        console.error("Login error:", error);
        dispatch({ type: types.LOGIN_FAILURE, payload: error });
        throw error;
      }
    },
  };
}
