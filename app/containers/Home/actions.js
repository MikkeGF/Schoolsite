/*
 *
 * Home actions
 *
 */

import { DEFAULT_ACTION, INCREMENT, DECREMENT } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}
