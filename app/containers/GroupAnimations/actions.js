/*
 *
 * GroupAnimations actions
 *
 */

import { DEFAULT_ACTION, GET_ANIMATIONS, SET_ANIMATIONSDATA } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getAnimations() {
  return {
    type: GET_ANIMATIONS,
  };
}

export function setAnimationsdata(data) {
  return {
    type: SET_ANIMATIONSDATA,
    data
  }
}
