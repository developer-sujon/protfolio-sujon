//external import
import { createSlice } from "@reduxjs/toolkit";

const PortfolioSlice = createSlice({
  name: "Portfolio",
  initialState: {},
  reducers: {
    SetPortfolioList(state, action) {
      state.PortfolioList = action.payload;
    },
    SetPortfolio(state, action) {
      state.Portfolio = action.payload;
    },
    SetTotalPage(state, action) {
      state.TotalPortfolio = action.payload;
    },
  },
});

export const { SetPortfolioList, SetPortfolio, SetTotalPage } =
  PortfolioSlice.actions;
export default PortfolioSlice.reducer;
