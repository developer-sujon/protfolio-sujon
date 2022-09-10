//Internal Import
import store from "../redux/store/store";
import RestClient from "./RestClient";
import ToastMessage from "../helper/ToastMessage";
import { SetLogin } from "../redux/slices/AuthSlice";

class AuthRequest {
  static async Login(postBody) {
    const { data } = await RestClient.postRequest("/Auth/LoginUser", postBody);
    if (data) {
      store.dispatch(SetLogin(data?.accessToken));
      ToastMessage.successMessage(data?.message);
      return true;
    }
  }

  static async Register(postBody) {
    const { data } = await RestClient.postRequest(
      "/Auth/RegisterUser",
      postBody,
    );
    if (data) {
      ToastMessage.successMessage(data?.message);
      return true;
    }
  }
}

export default AuthRequest;
