//external import
import { createSlice } from "@reduxjs/toolkit";

const BlogSlice = createSlice({
  name: "Blog",
  initialState: {},
  reducers: {
    SetBlogList(state, action) {
      state.BlogList = action.payload;
    },
    SetBlog(state, action) {
      state.Blog = action.payload;
    },
    SetTotalPage(state, action) {
      state.TotalBlog = action.payload;
    },
  },
});

export const { SetBlogList, SetBlog, SetTotalPage } =
  BlogSlice.actions;
export default BlogSlice.reducer;
