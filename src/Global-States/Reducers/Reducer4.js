import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  error: "",
  loading: false,
};

export const fetchTodos = createAsyncThunk("todo/thunk", async () =>
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => "error-api-call")
);
//   let res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
//   res = await res.json();
//   return res;

const asyncThunkSlice = createSlice({
  name: "Thunk",
  initialState: initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: function (builder) {
    builder.addCase(fetchTodos.pending, (state, action) => {
      return {
        loading: true,
        error: "",
        data: [],
      };
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      console.log(
        "🚀 ~ file: Reducer4.js ~ line 35 ~ builder.addCase ~ action",
        action
      );
      return {
        loading: false,
        error: "",
        data: action.payload,
      };
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      return {
        loading: false,
        error: "errror",
        data: [],
      };
    });
  },
});

export default asyncThunkSlice.reducer;
