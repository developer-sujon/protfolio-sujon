//external import
import { createSlice } from "@reduxjs/toolkit";
import SessionHelper from "../../helper/SessionHelper";

const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    accessToken: SessionHelper.getToken() || undefined,
  },
  reducers: {
    SetLogin: (state, action) => {
      SessionHelper.setToken(action.payload);
      state.accessToken = SessionHelper.getToken() || undefined;
    },
    SetLogout: (state, action) => {
      SessionHelper.removeToken();
      state.accessToken = SessionHelper.getToken() || undefined;
    },
  },
});

export const { SetLogin, SetLogout } = AuthSlice.actions;
export default AuthSlice.reducer;
