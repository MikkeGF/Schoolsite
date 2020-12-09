/*
 *
 * GroupAnimations reducer
 *
 */
//import produce from 'immer';
import { DEFAULT_ACTION, GET_ANIMATIONS, SET_ANIMATIONSDATA } from './constants';

export const initialState = {
  data: null
};

/* eslint-disable default-case, no-param-reassign */
const groupAnimationsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_ANIMATIONSDATA:
        const { data } = action;
        return { ...state, data}
        default:
          return state;
    }
  }

export default groupAnimationsReducer;
