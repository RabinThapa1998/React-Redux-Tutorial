import React from "react";
import { useDispatch } from "react-redux";
import { buyCarAction } from "../Global-States/ActionCreators/Reducer1Actions";

function HomePage() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>HomePage.js</h1>
      <button onClick={() => dispatch(buyCarAction())}>
        click to dispatch a BUY_CAR
      </button>
    </div>
  );
}

export default HomePage;
// old method
// const mapDispatchToProps = (dispatch)=>{}
//export default connect(mapDispatchToProps)(HomePage)
