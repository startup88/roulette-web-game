import { SET_STATE } from "./actions";

export const initialState = {
  totalBet: 0,
  cash: 1000,
  wheelNumber: undefined,
  betsData: [],
  winAmount: 0,
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
