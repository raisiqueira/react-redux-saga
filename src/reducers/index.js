import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from "../actions/index";
const initialState = {
  fething: false,
  dog: null,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fething: true, error: null };
    case API_CALL_SUCCESS:
      return { ...state, dog: action.dog, error: null, fething: false };
    case API_CALL_FAILURE:
      return { ...state, fething: false, error: action.error };
    default:
      return state;
  }
}
