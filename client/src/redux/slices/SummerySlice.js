//external import
import { createSlice } from "@reduxjs/toolkit";

const SummerySlice = createSlice({
  name: "Summery",
  initialState: {},
  reducers: {
    SetBlog(state, action) {
      state.Blog = action.payload;
    },
    SetPortfolio(state, action) {
      state.Portfolio = action.payload;
    },
    SetTestimonial(state, action) {
      state.Testimonial = action.payload;
    },
    SetClient(state, action) {
      state.Client = action.payload;
    },
    SetService(state, action) {
      state.Service = action.payload;
    },
    SetEducation(state, action) {
      state.Education = action.payload;
    },
    SetExperience(state, action) {
      state.Experience = action.payload;
    },
    SetSkill(state, action) {
      state.Skill = action.payload;
    },
    SetEmail(state, action) {
      state.Email = action.payload;
    },
  },
});

export const {
  SetBlog,
  SetPortfolio,
  SetTestimonial,
  SetClient,
  SetService,
  SetEducation,
  SetExperience,
  SetSkill,
  SetEmail,
} = SummerySlice.actions;
export default SummerySlice.reducer;
