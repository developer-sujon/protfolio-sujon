//external import
import { createSlice } from "@reduxjs/toolkit";

const EducationSlice = createSlice({
  name: "Education",
  initialState: {},
  reducers: {
    SetEdudationList(state, action) {
      state.EducationList = action.payload;
    },
    SetEdudation(state, action) {
      state.Education = action.payload;
    },
    SetTotalPage(state, action) {
      state.TotalEducation = action.payload;
    },
  },
});

export const { SetEdudationList, SetEdudation, SetTotalPage } =
  EducationSlice.actions;
export default EducationSlice.reducer;
