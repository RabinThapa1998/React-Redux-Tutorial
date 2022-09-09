import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsername, setPassword } from "../Global-States/Reducers/Reducer3";

function ServicePage() {
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const dataCreateAsyncThunk = useSelector((state) => state.asyncReducer);
  console.log(
    "🚀 ~ file: ServicePage.jsx ~ line 9 ~ ServicePage ~ dataCreateAsyncThunk",
    dataCreateAsyncThunk
  );
  if (dataCreateAsyncThunk.loading) {
    return <p>Loading....</p>;
  }
  return (
    <div>
      <h1>ServicePage.js</h1>
      <input type="text" onChange={(e) => setState(e.target.value)} />
      <button onClick={() => dispatch(setUsername(state))}>
        update username
      </button>
      <button onClick={() => dispatch(setPassword())}>update password</button>
      {dataCreateAsyncThunk.data.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
}

export default ServicePage;
