import { takeEvery, put, call } from "redux-saga/effects";
import {
  FETCH_USER_LIST_PAGE_REQUEST,
  FETCH_USER_INFO_REQUEST,
  CREATE_USER_REQUEST,
  UPDATE_USER_REQUEST,
  DELETE_USER_REQUEST
} from "../actions/types";
import {
  userListPageLoaded,
  userListPageError,
  userDataLoaded,
  userDataError,
  updateUserLoaded,
  updateUserError,
  deleteUserLoaded,
  deleteUserError
} from "../actions/user-list";

function fetchUserData(id) {
  return fetch(`https://reqres.in/api/users/${id}`).then(response =>
    response.json()
  );
}

function fetchUserListData(id) {
  return fetch(`https://reqres.in/api/users?page=${id}`).then(response =>
    response.json()
  );
}

function createNewUser(data) {
  return fetch(`https://reqres.in/api/users`, {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json"
    }
  }).then(response => response.json());
}

function updateUser(data) {
  return fetch(`https://reqres.in/api/users/${data.id}`, {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json"
    }
  }).then(response => response.json());
}

function deleteUser(id) {
  return fetch(`https://reqres.in/api/users/${id}`, {
    method: "delete"
  }).then(response => response);
}

function* workerGetUserListDataByID({ payload }) {
  try {
    const userList = yield call(fetchUserListData, payload);

    yield put(userListPageLoaded(userList));
  } catch (err) {
    yield put(userListPageError(err));
  }
}
function* workerGetUserDataByID({ payload }) {
  try {
    const userData = yield call(fetchUserData, payload);

    yield put(userDataLoaded(userData));
  } catch (err) {
    yield put(userDataError(err));
  }
}
function* workerCreateUser({ payload }) {
  try {
    const newUser = yield call(createNewUser, payload);
  } catch (error) {}
}

function* workerUpdateUser({ payload }) {
  try {
    const newUser = yield call(updateUser, payload);

    yield put(updateUserLoaded());
  } catch (error) {
    put(updateUserError(error));
  }
}

function* workerDeleteUser({ payload }) {
  try {
    const newUser = yield call(deleteUser, payload);

    yield put(deleteUserLoaded());
    //put
  } catch (error) {
    yield put(deleteUserError(error));
  }
}

export default function*() {
  yield takeEvery(FETCH_USER_LIST_PAGE_REQUEST, workerGetUserListDataByID);
  yield takeEvery(FETCH_USER_INFO_REQUEST, workerGetUserDataByID);
  yield takeEvery(CREATE_USER_REQUEST, workerCreateUser);
  yield takeEvery(UPDATE_USER_REQUEST, workerUpdateUser);
  yield takeEvery(DELETE_USER_REQUEST, workerDeleteUser);
}
