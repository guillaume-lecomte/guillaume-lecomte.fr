import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  RESUME_FETCH_REQUESTED,
  resumeFetchSucceeded,
  resumeFetchFailed,
  RESUME_DOWNLOAD_REQUESTED,
  resumeDownloadSucceeded,
  resumeDownloadFailed,
} from "../actions/resumeActions";
import { resumeApi, downloadResumeApi } from "../services/api";

function* downloadResume() {
  try {
    const fileURL = yield call(downloadResumeApi);
    yield put(resumeDownloadSucceeded(fileURL));
  } catch (e) {
    yield put(resumeDownloadFailed(e.message));
  }
}

function* fetchResume() {
  try {
    const resumeResponse = yield call(resumeApi);
    yield put(resumeFetchSucceeded(resumeResponse));
  } catch (e) {
    yield put(resumeFetchFailed(e.message));
  }
}

function* resumeSaga() {
  yield all([
    takeLatest(RESUME_FETCH_REQUESTED, fetchResume),
    takeLatest(RESUME_DOWNLOAD_REQUESTED, downloadResume),
  ]);
}

export default resumeSaga;
