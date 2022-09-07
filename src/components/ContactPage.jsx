import React from "react";
import { useDispatch } from "react-redux";
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
  return (
    <div>
      <h1>ContactPage.js</h1>
      <button onClick={() => fetchApi(dispatch)}>
        Call and Api to dispatch api data
      </button>
    </div>
  );
}

export default ContactPage;
