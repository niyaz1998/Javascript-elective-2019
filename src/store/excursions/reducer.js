import * as types from './actionTypes';

// --------------------------------------------------
//
//  Initial state of this part
//
// --------------------------------------------------

const initialState = {
};

// --------------------------------------------------
//
//  Reducer for this part
//
// --------------------------------------------------

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case types.EXCURSIONS_FETCHED:
      return {
        ...state,
        status: action.status,
        errorMessage: action.errorMessage,
        excursionsMap: action.excursionsMap,
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

export function getExcursionsMap(state) {
  return state.excursions.excursionsMap;
}

export function getExcursionLoadError(state) {
  return state.excursions.errorMessage;
}
