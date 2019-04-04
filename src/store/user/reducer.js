import * as types from './actionTypes';

// --------------------------------------------------
//
//  Initial state of this part
//
// --------------------------------------------------

const initialState = {
  token: undefined,
  accountType: -1,
  excursions: {}, // maps id of excursion to it's data
};

// --------------------------------------------------
//
//  Reducer for this part
//
// --------------------------------------------------

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case types.TOKEN_FETCHED:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
}

// --------------------------------------------------
//
//  Selectors for this part
//
// --------------------------------------------------

export function getUserToken(state) {
  return state.user.token;
}
