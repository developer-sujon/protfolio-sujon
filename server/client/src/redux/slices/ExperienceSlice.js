//external import
import { createSlice } from "@reduxjs/toolkit";

const ExperienceSlice = createSlice({
  name: "Experience",
  initialState: {},
  reducers: {
    SetEdudationList(state, action) {
      state.ExperienceList = action.payload;
    },
    SetEdudation(state, action) {
      state.Experience = action.payload;
    },
    SetTotalPage(state, action) {
      state.TotalExperience = action.payload;
    },
  },
});

export const { SetEdudationList, SetEdudation, SetTotalPage } =
  ExperienceSlice.actions;
export default ExperienceSlice.reducer;
