// IMPORTS FROM REDUX SAGA
import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
// IMPORTS FROM OUR APP
import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from "./actions/index";

// watherSaga watches for actions dispacheds to the store
export function* watcherSaga() {
  yield takeLatest(API_CALL_REQUEST, workerSaga);
}

// make a request from the API
function fetchDog() {
  return axios({
    method: "post",
    url: "https://dog.ceo/api/breeds/image/random"
  });
}

// worker saga put the data on store when watcherSaga see the action
function* workerSaga() {
  try {
    const response = yield call(fetchDog);
    const dog = response.data.message; // the url for the image

    yield put({ type: API_CALL_SUCCESS, dog });
  } catch (error) {
    yield put({ type: API_CALL_FAILURE, error });
  }
}
