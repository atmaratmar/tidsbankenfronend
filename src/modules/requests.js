import { SUCCESS_SUFFIX } from "redux-axios-middleware";
import HttpService from "../services/HttpService";
const LIST_REQUESTS = 'LIST_REQUESTS';
const ADD_REQUEST = 'ADD_REQUEST';
const DELETE_REQUEST = 'DELETE_REQUEST';
const requestReducer = (state = [], action) => {
    switch (action.type) {

        case LIST_REQUESTS + SUCCESS_SUFFIX:
            return action.payload.data;

        case DELETE_REQUEST:
            return state.filter((request) => request.id !== action.payload.request.id);

        default:
            return state;
    }
};

export default requestReducer;

export const allRequests = () => ({

    type: LIST_REQUESTS,
    payload: {
        request: {
            url: 'https://tidsbankapi.azurewebsites.net/request',
            validateStatus: function (status) {
              return status
            },

        },
    },
});
export const addRequest = request => {
  return {
      type: ADD_REQUEST,
      payload: {
          request: {
              url: 'https://tidsbankapi.azurewebsites.net/request',
              method: HttpService.HttpMethods.POST,
              validateStatus: function (status) {
                return status
              },
              data: request,
          },
      },
  }
};






export const deleteRequest = request => {
   // console.log(`${UserService.getUsername()} deletes the request ${request.id}`);
    return {
        type: DELETE_REQUEST,
        payload: {
            request,
            request: {
                url: `https://tidsbankapi.azurewebsites.net/request/${request.id}`,
                method: HttpService.HttpMethods.DELETE,
            },
        },
    }
};


