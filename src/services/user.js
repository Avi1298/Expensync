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
    login: async (data) => {
      const response = await instance.post(
        "auth/login",
        data,
        config({ auth: false, multipart: false })
      );
      return response.data;
    },
    logout: async () => {
      const response = await instance.post(
        "auth/logout",
        {},
        config({ auth: true })
      );
      return response.data;
    },
  };
}
