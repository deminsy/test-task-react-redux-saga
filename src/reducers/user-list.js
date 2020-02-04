import {
  FETCH_USER_LIST_PAGE_SUCCESS,
  FETCH_USER_LIST_PAGE_REQUEST,
  FETCH_USER_LIST_PAGE_FAILURE,
  FETCH_USER_INFO_REQUEST,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO_FAILURE,
  HIDE_UPDATE_MODAL,
  SHOW_UPDATE_MODAL,
  HIDE_CREATE_MODAL,
  SHOW_CREATE_MODAL,
  CREATE_USER_SUCCESS,
  CREATE_USER_REQUEST,
  CREATE_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_FAILURE,
  DELETE_USER_SUCCESS,
  DELETE_USER_REQUEST,
  DELETE_USER_FAILURE,
  SHOW_USER_INFO,
  HIDE_USER_INFO
} from "../actions/types";

const initialState = {
  loading: true,
  userList: null,
  userInfo: null,
  error: {},
  pageId: 0,
  loaded: false,
  userId: null,
  isCreateModalShown: false,
  isUpdateModalShown: false,
  isUserInfoShown: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_USER_LIST_PAGE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_USER_LIST_PAGE_SUCCESS:
      return {
        ...state,
        userList: payload,
        loaded: true,
        loading: false
      };

    case FETCH_USER_LIST_PAGE_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false
      };
    //---USER-INFO----
    case FETCH_USER_INFO_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: payload,
        loading: false
      };

    case FETCH_USER_INFO_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case FETCH_USER_INFO_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false
      };

    case HIDE_UPDATE_MODAL:
      return {
        ...state,
        isUpdateModalShown: false
      };
    case SHOW_UPDATE_MODAL:
      return {
        ...state,
        isUpdateModalShown: true,
        userInfo: payload
      };

    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false
      };

    case CREATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        isCreateModalShown: false
      };

    //   CREATE_USER_FAILURE,

    case UPDATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        isUpdateModalShown: false
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false
      };

    //   UPDATE_USER_REQUEST,
    //   UPDATE_USER_FAILURE,

    //   DELETE_USER_SUCCESS,
    //   DELETE_USER_REQUEST,
    //   DELETE_USER_FAILURE,

    case HIDE_CREATE_MODAL:
      return { ...state, isCreateModalShown: false };
    case SHOW_CREATE_MODAL:
      return { ...state, isCreateModalShown: true };

    case HIDE_USER_INFO:
      return { ...state, isUserInfoShown: false };
    case SHOW_USER_INFO:
      console.log("userInfo", payload);
      return { ...state, isUserInfoShown: true, userInfo: payload };

    default:
      return state;
  }
}
