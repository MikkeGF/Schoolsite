/*
 *
 * Home reducer
 *
 */
// import produce from 'immer';
import { DECREMENT, INCREMENT } from './constants';

export const initialState = {
  count: 5,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default homeReducer;
