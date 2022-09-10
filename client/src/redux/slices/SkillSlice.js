//external import
import { createSlice } from "@reduxjs/toolkit";

const SkillSlice = createSlice({
  name: "Skill",
  initialState: {},
  reducers: {
    SetSkillList(state, action) {
      state.SkillList = action.payload;
    },
    SetSkill(state, action) {
      state.Skill = action.payload;
    },
    SetTotalPage(state, action) {
      state.TotalSkill = action.payload;
    },
  },
});

export const { SetSkillList, SetSkill, SetTotalPage } =
  SkillSlice.actions;
export default SkillSlice.reducer;
