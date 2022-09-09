import React from "react";
import { useDispatch } from "react-redux";
import { buyCarAction } from "../Global-States/ActionCreators/Reducer1Actions";
import { fetchTodos } from "../Global-States/Reducers/Reducer4";

function HomePage() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>HomePage.js</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button onClick={() => dispatch(buyCarAction())}>
          click to dispatch a BUY_CAR
        </button>
        <button
          onClick={() => dispatch(fetchTodos())}
          style={{ margin: "10px" }}
        >
          click to dispatch create async thunk
        </button>
      </div>
    </div>
  );
}

export default HomePage;
// old method
// const mapDispatchToProps = (dispatch)=>{}
//export default connect(mapDispatchToProps)(HomePage)
