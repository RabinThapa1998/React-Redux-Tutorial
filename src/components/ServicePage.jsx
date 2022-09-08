import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsername, setPassword } from "../Global-States/Reducers/Reducer3";

function ServicePage() {
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <h1>ServicePage.js</h1>
      <input type="text" onChange={(e) => setState(e.target.value)} />
      <button onClick={() => dispatch(setUsername(state))}>
        update username
      </button>
      <button onClick={() => dispatch(setPassword())}>update password</button>
    </div>
  );
}

export default ServicePage;
