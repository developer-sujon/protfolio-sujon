//external import
import { createSlice } from "@reduxjs/toolkit";

const ClientSlice = createSlice({
  name: "Client",
  initialState: {},
  reducers: {
    SetClientList(state, action) {
      state.ClientList = action.payload;
    },
    SetClient(state, action) {
      state.Client = action.payload;
    },
    SetTotalPage(state, action) {
      state.TotalClient = action.payload;
    },
  },
});

export const { SetClientList, SetClient, SetTotalPage } = ClientSlice.actions;
export default ClientSlice.reducer;
