import { configureStore } from "@reduxjs/toolkit";
import dispReducer from "../features/disp/dispSlice";

export const store = configureStore({
  reducer: {
    display: dispReducer,
  },
});
