//external import
import { createSlice } from "@reduxjs/toolkit";

const ServiceSlice = createSlice({
  name: "Service",
  initialState: {},
  reducers: {
    SetServiceList(state, action) {
      state.ServiceList = action.payload;
    },
    SetService(state, action) {
      state.Service = action.payload;
    },
    SetTotalPage(state, action) {
      state.TotalService = action.payload;
    },
  },
});

export const { SetServiceList, SetService, SetTotalPage } =
  ServiceSlice.actions;
export default ServiceSlice.reducer;
