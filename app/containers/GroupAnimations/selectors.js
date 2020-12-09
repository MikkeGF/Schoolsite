import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the groupAnimations state domain
 */

const selectGroupAnimationsDomain = state =>
  state.groupAnimations || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GroupAnimations
 */

const makeSelectGroupAnimations = () =>
  createSelector(
    selectGroupAnimationsDomain,
    substate => substate,
  );

export default makeSelectGroupAnimations;
export { selectGroupAnimationsDomain };
