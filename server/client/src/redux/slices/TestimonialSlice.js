//external import
import { createSlice } from "@reduxjs/toolkit";

const TestimonialSlice = createSlice({
  name: "Testimonial",
  initialState: {},
  reducers: {
    SetTestimonialList(state, action) {
      state.TestimonialList = action.payload;
    },
    SetTestimonial(state, action) {
      state.Testimonial = action.payload;
    },
    SetTotalPage(state, action) {
      state.TotalTestimonial = action.payload;
    },
  },
});

export const { SetTestimonialList, SetTestimonial, SetTotalPage } =
  TestimonialSlice.actions;
export default TestimonialSlice.reducer;
