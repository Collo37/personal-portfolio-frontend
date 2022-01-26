import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebarSlice",
  initialState: {
    showBar: false,
  },
  reducers: {
    toggleBar: (state) => {
      if (state.showBar) {
        state.showBar = false;
      } else {
        state.showBar = true;
      }
    },
  },
});

export const { toggleBar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
