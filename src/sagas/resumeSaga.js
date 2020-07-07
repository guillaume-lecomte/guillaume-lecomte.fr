import { call, put, takeLatest } from "redux-saga/effects";
import {
  RESUME_FETCH_REQUESTED,
  resumeFetchSucceeded,
  resumeFetchFailed,
} from "../actions/resumeActions";
import resumeApi from "../services/api";

function* fetchResume() {
  try {
    const resumeResponse = yield call(resumeApi);
    yield put(resumeFetchSucceeded(resumeResponse));
  } catch (e) {
    yield put(resumeFetchFailed(e.message));
  }
}

function* resumeSaga() {
  yield takeLatest(RESUME_FETCH_REQUESTED, fetchResume);
}

export default resumeSaga;
