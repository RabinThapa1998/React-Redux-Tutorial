import { BUY_CAR, CHANGE_CAR_ENGINE } from "../ActionCreators/Reducer1Actions";

const initialState = {
  cost: 0,
  quantity: 0,
  engine: "v8",
};

export const carReducer1 = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAR: {
      return {
        ...state,
        cost: 1500 + state.cost,
        quantity: state.quantity + 1,
      };
    }
    case CHANGE_CAR_ENGINE: {
      return {
        ...state,
        engine: action.payload,
      };
    }
    default:
      return { ...state };
  }
};
