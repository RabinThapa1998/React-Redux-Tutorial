import { configureStore } from "@reduxjs/toolkit";
import { carReducer1 } from "../Reducers/Reducer1";

export const store = configureStore({
  reducer: {
    carReducer: carReducer1,
  },
});
