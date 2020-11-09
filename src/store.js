import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import rootSaga from "./sagas/root";
import resumeReducer from "./reducers/resumeReducer";

const sagaMiddleware = createSagaMiddleware(rootSaga);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  const store = createStore(
    resumeReducer,
    initialState,
    compose(
      composeEnhancer(applyMiddleware(thunk), applyMiddleware(sagaMiddleware))
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
