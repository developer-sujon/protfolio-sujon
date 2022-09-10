//external import
import { createSlice } from "@reduxjs/toolkit";

const ProfileSlice = createSlice({
  name: "Profile",
  initialState: {},
  reducers: {
    SetUserDetails(state, action) {
      state.user = action.payload;
    },
    RemoveUserDetails(state, action) {
      state.user = undefined;
    },
  },
});

export const { SetUserDetails, RemoveUserDetails } = ProfileSlice.actions;
export default ProfileSlice.reducer;
