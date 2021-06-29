import { SUCCESS_SUFFIX } from "redux-axios-middleware";
import HttpService from "../services/HttpService";
const LIST_SETTINGS = "LIST_SETTINGS";
const ADD_SETTING = "ADD_SETTING";
const DELETE_SETTING = "DELETE_SETTING";
const settingReducer = (state = [], action) => {
  switch (action.type) {
    case LIST_SETTINGS + SUCCESS_SUFFIX:
      return action.payload.data;
    case DELETE_SETTING:
      return state.filter(
        (setting) => setting.userId !== action.payload.setting.userId
      );

    default:
      return state;
  }
};

export default settingReducer;

export const allSettings = () => ({
  type: LIST_SETTINGS,
  payload: {
    request: {
      url: "https://tidsbankapi.azurewebsites.net/setting",
    },
  },
});

export const addSetting = (setting) => {
  return {
    type: ADD_SETTING,
    payload: {
      request: {
        url: "https://tidsbankapi.azurewebsites.net/setting",
        method: HttpService.HttpMethods.POST,
        validateStatus: function (status) {
          return status
        },
        data: setting,
      },
    },
  };
};

export const deleteSetting = (setting) => {
  console.log(setting)
  return {
    type: DELETE_SETTING,
    payload: {
      setting,
      request: {
        url: `https://tidsbankapi.azurewebsites.net/setting/${setting.userId}`,
        method: HttpService.HttpMethods.DELETE,
        validateStatus: function (status) {
          return status
        },
      },
    },
  };
};
