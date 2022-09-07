import { configureStore } from "@reduxjs/toolkit";
import { carReducer1 } from "../Reducers/Reducer1";
import { reducer2 } from "../Reducers/Reducer2";

export const store = configureStore({
  reducer: {
    carReducer: carReducer1,
    apiReducer: reducer2,
  },
});
