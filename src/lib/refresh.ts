import createRefresh from "react-auth-kit/createRefresh";
import axios from "axios";

const refresh = createRefresh({
  interval: 10,
  refreshApiCallback: async (param) => {
    console.log("Params form auth kit", param);
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/refresh",
        { refreshToken: param.refreshToken },
        {
          headers: { Authorization: `Bearer ${param.authToken}` },
        }
      );
      console.log("Refreshing");
      return {
        isSuccess: true,
        newAuthToken: response.data.accessToken,
        newAuthTokenExpireIn: 10,
        newRefreshTokenExpiresIn: 60,
      };
    } catch (error) {
      console.error(error);
      return {
        isSuccess: false,
        newAuthToken: undefined,
        newAuthTokenExpireIn: undefined,
        newRefreshTokenExpiresIn: undefined,
      };
    }
  },
});

export default refresh;
