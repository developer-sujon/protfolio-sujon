//external import
import { createSlice } from "@reduxjs/toolkit";

const EmailSlice = createSlice({
  name: "Email",
  initialState: {},
  reducers: {
    SetEmailList(state, action) {
      state.EmailList = action.payload;
    },
    SetTotalPage(state, action) {
      state.TotalEmail = action.payload;
    },
  },
});

export const { SetEmailList, SetTotalPage } = EmailSlice.actions;
export default EmailSlice.reducer;
