import {
  FETCH_USER_LIST_PAGE_REQUEST,
  FETCH_USER_LIST_PAGE_SUCCESS,
  FETCH_USER_LIST_PAGE_FAILURE,
  FETCH_USER_INFO_REQUEST,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO_FAILURE,
  CREATE_USER_SUCCESS,
  CREATE_USER_REQUEST,
  CREATE_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_FAILURE,
  DELETE_USER_SUCCESS,
  DELETE_USER_REQUEST,
  DELETE_USER_FAILURE,
  HIDE_UPDATE_MODAL,
  SHOW_UPDATE_MODAL,
  HIDE_CREATE_MODAL,
  SHOW_CREATE_MODAL,
  SHOW_USER_INFO,
  HIDE_USER_INFO
} from "./types";
// GET USER LIST PAGE
export const userListPageRequested = (pageId = 1) => {
  return {
    type: FETCH_USER_LIST_PAGE_REQUEST,
    payload: pageId
  };
};
export const userListPageLoaded = userList => {
  return {
    type: FETCH_USER_LIST_PAGE_SUCCESS,
    payload: userList
  };
};
export const userListPageError = error => {
  return {
    type: FETCH_USER_LIST_PAGE_FAILURE,
    payload: error
  };
};
// GET USER INFO
export const userDataRequested = (userId = 1) => {
  return {
    type: FETCH_USER_INFO_REQUEST,
    payload: userId
  };
};
export const userDataLoaded = userData => {
  return {
    type: FETCH_USER_INFO_SUCCESS,
    payload: userData
  };
};
export const userDataError = error => {
  return {
    type: FETCH_USER_INFO_FAILURE,
    payload: error
  };
};

// CREATE USER
export const createUserRequested = (userId = 1) => {
  return {
    type: CREATE_USER_REQUEST,
    payload: userId
  };
};
export const createUserLoaded = userData => {
  return {
    type: CREATE_USER_SUCCESS,
    payload: userData
  };
};
export const createUserError = error => {
  return {
    type: CREATE_USER_FAILURE,
    payload: error
  };
};
// UPDATE USER
export const updateUserRequested = (userId = 1) => {
  return {
    type: UPDATE_USER_REQUEST,
    payload: userId
  };
};
export const updateUserLoaded = userData => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: userData
  };
};
export const updateUserError = error => {
  return {
    type: UPDATE_USER_FAILURE,
    payload: error
  };
};
// DELETE USER
export const deleteUserRequested = (userId = 1) => {
  return {
    type: DELETE_USER_REQUEST,
    payload: userId
  };
};
export const deleteUserLoaded = userData => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: userData
  };
};
export const deleteUserError = error => {
  return {
    type: DELETE_USER_FAILURE,
    payload: error
  };
};
//      MODALS;
export const showUpdateUserModal = userInfo => {
  return {
    type: SHOW_UPDATE_MODAL,
    payload: userInfo
  };
};
export const hideUdateUserModal = isShown => {
  return {
    type: HIDE_UPDATE_MODAL
  };
};
export const showCreateUserModal = userInfo => {
  return {
    type: SHOW_CREATE_MODAL
  };
};
export const hideCreateUserModal = isShown => {
  return {
    type: HIDE_CREATE_MODAL
  };
};

export const showUserInfo = userInfo => {
  return {
    type: SHOW_USER_INFO,
    payload: userInfo
  };
};
export const hideUserInfo = isShown => {
  return {
    type: HIDE_USER_INFO
  };
};
