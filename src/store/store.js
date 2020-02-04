import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import reducer from "../reducers/user-list";
import usersSaga from "../sagas/usersSaga";
const sagaMiddleware = createSagaMiddleware();
//const initialState = {};

const store = createStore(
  reducer,

  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(usersSaga);
export default store;
