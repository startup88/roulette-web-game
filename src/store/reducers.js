import { SET_STATE } from "./actions";

export const initialState = {
  cash: 1000,
  wheelNumber: undefined,
  betsData: [],
  winAmount: 0,
  betUnit: 1,
};

export default (state = initialState, { type, payload }) => {
  const { field, value } = payload;
  switch (type) {
    case SET_STATE:
      return {
        ...state,
        [field]: value,
      };

    default:
      break;
  }
};
