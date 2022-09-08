import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  failureAction,
  pendingAction,
  successAction,
} from "../Global-States/ActionCreators/Reducer2Action";
// import { fetchApi } from "../Global-States/ActionCreators/Reducer2Action";

const fetchApi = (dispatch) => {
  dispatch(pendingAction());
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
      dispatch(successAction(data));
    })
    .catch((err) => {
      dispatch(failureAction("something went wrong"));
    });
};

function ContactPage() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);
  console.log(
    "🚀 ~ file: ContactPage.jsx ~ line 25 ~ ContactPage ~ userData",
    userData
  );
  return (
    <div>
      <h1>ContactPage.js</h1>
      <button onClick={() => fetchApi(dispatch)}>
        Call and Api to dispatch api data
      </button>
      <p>{userData.userName}</p>
      <p>{userData.userPassword}</p>
    </div>
  );
}

export default ContactPage;
