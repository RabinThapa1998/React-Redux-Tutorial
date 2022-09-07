export const BUY_CAR = "buy-car";
export const CHANGE_CAR_ENGINE = "v8-engine-change";

export const buyCarAction = () => {
  return {
    type: BUY_CAR,
  };
};

export const changeCarAction = (data) => {
  return {
    type: CHANGE_CAR_ENGINE,
    payload: data,
  };
};
