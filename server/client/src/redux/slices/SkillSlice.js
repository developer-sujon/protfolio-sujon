//external import
import { createSlice } from "@reduxjs/toolkit";

const SkillSlice = createSlice({
  name: "Skill",
  initialState: {},
  reducers: {
    SetEdudationList(state, action) {
      state.SkillList = action.payload;
    },
    SetEdudation(state, action) {
      state.Skill = action.payload;
    },
    SetTotalPage(state, action) {
      state.TotalSkill = action.payload;
    },
  },
});

export const { SetEdudationList, SetEdudation, SetTotalPage } =
  SkillSlice.actions;
export default SkillSlice.reducer;
