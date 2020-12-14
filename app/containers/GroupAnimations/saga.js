import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { getAnimations, setAnimationsdata } from './actions';
import { GET_ANIMATIONS } from './constants';

export function requestAnimations() {
  return axios.request({
    method: 'get',
    url: 'https://mikkegf.me:443/posts',
  });
}

export function* handleGetAnimations(action) {
  try {
    const response = yield call(requestAnimations);
    const { data } = response;
    yield put(setAnimationsdata(data));
  } catch (error) {
    console.log(error);
  }
}

// Individual exports for testing
export default function* groupAnimationsSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_ANIMATIONS, handleGetAnimations);
}
