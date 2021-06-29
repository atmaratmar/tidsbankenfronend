import { SUCCESS_SUFFIX } from "redux-axios-middleware";
import HttpService from "../services/HttpService";
import UserService from "../services/UserService";

const LIST_COMMENTS = 'LIST_COMMENTS';
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const commentReducer = (state = [], action) => {
    switch (action.type) {

        case LIST_COMMENTS + SUCCESS_SUFFIX:
            return action.payload.data;

        case DELETE_COMMENT:
            return state.filter((comment) => comment.id !== action.payload.comment.id);

        default:
            return state;
    }
};
export default commentReducer;
export const allComments = comment => ({
    type: LIST_COMMENTS,
    payload: {
        request: {
            url: `https://tidsbankapi.azurewebsites.net/comment/request/${comment}`,
            validateStatus: function (status) {
              return status
            },

        },
    },
});


export const addComment = comment => {console.log(comment.id)
  return {
    type: ADD_COMMENT,
    payload: {
      request: {
        url: 'https://tidsbankapi.azurewebsites.net/comment',
        method: HttpService.HttpMethods.POST,
        validateStatus: function (status) {
          return status
        },
        data: comment,
      },
    },
  }
};


export const deleteComment = comment => {
    console.log(`${UserService.getUsername()} deletes the comment ${comment.id}`);
    return {
        type: DELETE_COMMENT,
        payload: {
            comment,
            request: {
                url: `https://tidsbankapi.azurewebsites.net/comment/requests/${comment.id}`,
                method: HttpService.HttpMethods.DELETE,
                validateStatus: function (status) {
                  return status
                },
            },
        },
    }
};
