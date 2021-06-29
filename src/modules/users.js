import { SUCCESS_SUFFIX } from "redux-axios-middleware";
import HttpService from "../services/HttpService";
export const EDIT_USER = "EDIT_USER";
export const LIST_USERS = "LIST_USERS";
export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
const usersReducer = (state = [], action) => {
  switch (action.type) {
    case LIST_USERS + SUCCESS_SUFFIX:
      return action.payload.data;

    case DELETE_USER:
      return state.filter((user) => user.id !== action.payload.user.id);

    default:
      return state;
  }
};
export default usersReducer;
export const allUsers = () => ({
  type: LIST_USERS,
  payload: {
    request: {
      url: "https://tidsbankapi.azurewebsites.net/user",
      validateStatus: function (status) {
        return status
      },
    },
  },
});
export const addUser = (user) => {
  console.log(user.id);
  return {
    type: ADD_USER,
    payload: {
      request: {
        url: "https://tidsbankapi.azurewebsites.net/user",
        method: HttpService.HttpMethods.POST,
        validateStatus: function (status) {
          return status
        },
        data: user,
      },
    },
  };
};
export const editUser = (user) => {
  console.log(user.id);
  return {
    type: EDIT_USER,
    payload: {
      request: {
        url: "https://tidsbankapi.azurewebsites.net/user",
        method: HttpService.HttpMethods.PATCH,
        validateStatus: function (status) {
          return status
        },
        data: user,
      },
    },
  };
};

export const deleteUser = (user) => {
  return {
    type: DELETE_USER,
    payload: {
      user,
      request: {
        url: `https://tidsbankapi.azurewebsites.net/${user.id}`,
        method: HttpService.HttpMethods.DELETE,
        validateStatus: function (status) {
          return status
        },
      },
    },
  };
};
