import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import { LOGIN, SIGN_UP } from "../actions/actionTypes";

const persistConfig = {
  key: "user",
  storage: AsyncStorage,
  blacklist: ["loading", "errorMessage"],
};

const initialState = {
  user: undefined,
  token: undefined,
  loading: false,
  authenticated: false,
  userCred: {},
};

const reducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  if (__DEV__) console.log("-----> type", type);

  switch (type) {
    case `${SIGN_UP}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${SIGN_UP}_FULFILLED`:
      return {
        ...state,
        loading: false,
        user: payload.user,
        token: payload.token,
      };
    case `${SIGN_UP}_REJECTED`:
      return {
        ...state,
        loading: false,
      };
    case `${LOGIN}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${LOGIN}_FULFILLED`:
      return {
        ...state,
        loading: false,
        user: payload.user,
        token: payload.token,
        authenticated: true,
      };
    case `${LOGIN}_REJECTED`:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
export default persistReducer(persistConfig, reducer);
