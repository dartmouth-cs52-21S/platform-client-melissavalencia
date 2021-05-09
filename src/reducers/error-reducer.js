import { ActionTypes } from '../actions';

const initialState = {
  error: '',
};

const ErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ERROR_CATCH:
      return { ...state, error: action.payload };
    case ActionTypes.ERROR_CLEAR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default ErrorReducer;
