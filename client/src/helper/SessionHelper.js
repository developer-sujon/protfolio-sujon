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
  static SetUserDetails(user) {
    sessionStorage.setItem("user", JSON.stringify(user));
  }
  static getUserDetails() {
    return JSON.parse(sessionStorage.getItem("user"));
  }
  static RemoveUserDetails() {
    return sessionStorage.removeItem("user");
  }
  static setOtpEmail() {
    return JSON.parse(sessionStorage.getItem("otp"));
  }
  static getOtpEmail() {
    return sessionStorage.removeItem("otp");
  }
  static setOtpCode() {
    return JSON.parse(sessionStorage.getItem("otp"));
  }
  static getOtpCode() {
    return sessionStorage.removeItem("otp");
  }
}

export default SessionHelper;
