import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  userPassword: "",
};

export const userSlice = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {
    setUsername: (state, action) => {
      return {
        ...state,
        userName: action.payload,
      };
    },
    setPassword: (state) => {
      return {
        ...state,
        userPassword: "123@#$%^&*(",
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPassword, setUsername } = userSlice.actions;

export default userSlice.reducer;
