import { configureStore } from "@reduxjs/toolkit";
import { carReducer1 } from "../Reducers/Reducer1";
import { reducer2 } from "../Reducers/Reducer2";
import Reducer3 from "../Reducers/Reducer3";
import Reducer4 from "../Reducers/Reducer4";

export const store = configureStore({
  reducer: {
    carReducer: carReducer1,
    apiReducer: reducer2,
    userReducer: Reducer3,
    asyncReducer: Reducer4,
  },
});
