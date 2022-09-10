//external import
import { createSlice } from "@reduxjs/toolkit";

const CommentSlice = createSlice({
  name: "Comment",
  initialState: {},
  reducers: {
    SetCommentList(state, action) {
      state.CommentList = action.payload;
    },
    SetTotalPage(state, action) {
      state.TotalComment = action.payload;
    },
  },
});

export const { SetCommentList, SetTotalPage } = CommentSlice.actions;
export default CommentSlice.reducer;
