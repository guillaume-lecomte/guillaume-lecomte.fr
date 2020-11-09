import { fork } from "redux-saga/effects";
import resumeSaga from "./resumeSaga";

export default function* rootSaga() {
  yield fork(resumeSaga);
}
