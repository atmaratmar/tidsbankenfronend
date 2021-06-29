import { SUCCESS_SUFFIX } from "redux-axios-middleware";
import HttpService from "../services/HttpService";
const LIST_INELIGIBLEPERIODS = 'LIST_INELIGIBLEPERIODS';
const ADD_INELIGIBLEPERIOD = 'ADD_INELIGIBLEPERIOD';
const DELETE_INELIGIBLEPERIOD = 'DELETE_INELIGIBLEPERIOD';
const ineligibleperiodReducer = (state = [], action) => {
    switch (action.type) {

        case LIST_INELIGIBLEPERIODS + SUCCESS_SUFFIX:
            return action.payload.data;

        case DELETE_INELIGIBLEPERIOD:
            return state.filter((ineligibleperiod) => ineligibleperiod.id !== action.payload.ineligibleperiod.id);

        default:
            return state;
    }
};

export default ineligibleperiodReducer;

export const allIneligiblePeriod = () => ({

    type: LIST_INELIGIBLEPERIODS,
    payload: {
        request: {
            url: 'https://tidsbankapi.azurewebsites.net/ineligible',
        },
    },
});

export const addIneligibleperiod = ineligibleperiod => {
    return {
        type: ADD_INELIGIBLEPERIOD,
        payload: {
            request: {
                url: 'https://tidsbankapi.azurewebsites.net/ineligible',
                method: HttpService.HttpMethods.POST,
                validateStatus: function (status) {
                  return status
                },
                data: ineligibleperiod,
            },
        },
    }
};

export const deleteIneligibleperiod = ineligibleperiod => {
    return {
        type: DELETE_INELIGIBLEPERIOD,
        payload: {
            ineligibleperiod,
            request: {
                url: `https://tidsbankapi.azurewebsites.net/${ineligibleperiod.id}`,
                method: HttpService.HttpMethods.DELETE,
                validateStatus: function (status) {
                  return status
                },
            },
        },
    }
};


