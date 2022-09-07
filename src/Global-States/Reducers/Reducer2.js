import { SUCCESS, FAILURE, PENDING } from "../ActionCreators/Reducer2Action";

const initialState = {
  data: [],
  error: "",
  loading: false,
};

export const reducer2 = (state = initialState, action) => {
  console.log("reducer");
  switch (action.type) {
    case PENDING: {
      return {
        data: [],
        error: "",
        loading: true,
      };
    }
    case SUCCESS: {
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    }
    case FAILURE: {
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    }
    default:
      return { ...state };
  }
};
