import { useDispatch } from "react-redux";
import useAuth from "../../services/user";
import * as types from "./actionTypes";

export default function useUserActions() {
  const dispatch = useDispatch();
  const { login, signUp } = useAuth();

  return {
    signUp: async (params) => {
      try {
        const response = await signUp(params);
        const { token, user } = response;

        dispatch({
          type: types.SIGN_UP_SUCCESS,
          payload: { user, token },
        });

        return { user, token };
      } catch (error) {
        dispatch({
          type: types.SIGN_UP_FAILURE,
          payload: error.message || "Sign up failed",
        });
        throw error;
      }
    },

    login: async (data) => {
      try {
        const response = await login(data);
        const { token, ...user } = response;

        dispatch({ type: types.LOGIN_SUCCESS, payload: { user, token } });
        return { user, token };
      } catch (error) {
        console.error("Login error:", error);
        dispatch({ type: types.LOGIN_FAILURE, payload: error });
        throw error;
      }
    },
  };
}
