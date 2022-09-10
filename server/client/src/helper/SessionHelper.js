class SessionHelper {
  static setToken(accessToken) {
    sessionStorage.setItem("accessToken", accessToken);
  }
  static getToken() {
    return sessionStorage.getItem("accessToken");
  }
  static removeToken() {
    return sessionStorage.removeItem("accessToken");
  }
  static SetUserDetails(User) {
    sessionStorage.setItem("User", JSON.stringify(User));
  }
  static getUserDetails() {
    return JSON.parse(sessionStorage.getItem("User"));
  }
  static RemoveUserDetails() {
    return sessionStorage.removeItem("User");
  }
  static setOtpEmail(email) {
    return sessionStorage.setItem("otpEmail", email);
  }
  static getOtpEmail() {
    return sessionStorage.getItem("otpEmail");
  }
  static setOtpCode(opt) {
    return sessionStorage.setItem("otp", opt);
  }
  static getOtpCode() {
    return sessionStorage.getItem("otp");
  }
}

export default SessionHelper;
