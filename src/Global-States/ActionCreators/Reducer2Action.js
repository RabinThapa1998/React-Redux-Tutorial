export const PENDING = "PENDING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const pendingAction = () => {
  return {
    type: PENDING,
  };
};
export const successAction = (data) => {
  return {
    type: SUCCESS,
    payload: data,
  };
};
export const failureAction = (err) => {
  return {
    type: FAILURE,
    payload: err,
  };
};
