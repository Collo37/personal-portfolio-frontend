import { configureStore } from "@reduxjs/toolkit";

import sidebarSlice from "./sidebarSlice";

const store = configureStore({
  reducer: {
    showBar: sidebarSlice,
  },
});

export default store;
