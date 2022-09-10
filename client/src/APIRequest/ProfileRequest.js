//Internal Import
import store from "../redux/store/store";
import RestClient from "./RestClient";
import ToastMessage from "../helper/ToastMessage";
import { SetUserDetails } from "../redux/slices/ProfileSlice";
import SessionHelper from "../helper/SessionHelper";

class ProfileRequest {
  static async UserDetails() {
    const { data } = await RestClient.getRequest(
      "/admin/SelectUser/devoloper.sujon@gmail.com",
    );

    if (data) {
      store.dispatch(SetUserDetails(data?.[0]));
      return true;
    }
  }

  static async UserUpdate(postBody) {
    const { data } = await RestClient.updateRequest(
      "/user/UserUpdate",
      postBody,
    );
    if (data) {
      ToastMessage.successMessage(data.message);
      return true;
    }
  }

  static async UserChecgePassword(postBody) {
    const { data } = await RestClient.putRequest(
      "/user/UserChangePassword",
      postBody,
    );

    if (data) {
      ToastMessage.successMessage(data.message);
      return true;
    }
  }

  static async SendRecoveryOtp(email) {
    const { data } = await RestClient.getRequest(
      `/User/SendRecoveryOtp/${email}`,
    );
    if (data) {
      SessionHelper.setOtpEmail(email);
      ToastMessage.successMessage(data.message);
      return true;
    }
  }

  static async VerifyRecoveryOtp(otp) {
    const { data } = await RestClient.getRequest(
      `/User/VerifyRecoveryOtp/${SessionHelper.getOtpEmail()}/${otp}`,
    );

    if (data) {
      SessionHelper.setOtpCode(otp);
      ToastMessage.successMessage(data.message);
    }
  }

  static async RecoveryResetPass(Password) {
    const { data } = await RestClient.postRequest(
      `/User/RecoveryResetPass/${SessionHelper.getOtpEmail()}/${SessionHelper.getOtpCode()}`,
      Password,
    );

    if (data) {
      ToastMessage.successMessage(data.message);
      return true;
    }
  }
}

export default ProfileRequest;
