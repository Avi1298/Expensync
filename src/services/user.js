import { instance, config } from "../services/init";

export default function useAuth() {
  return {
    signUp: (data) => {
      return instance.post(
        "auth/register",
        data,
        config({ auth: false, multipart: false })
      );
    },
    login: (data) => {
      return instance.post(
        "auth/login",
        data,
        config({ auth: false, multipart: false })
      );
    },
  };
}
