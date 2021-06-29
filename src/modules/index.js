import { combineReducers } from "redux";
import users from "./users";
import ineligibleperiod from "./ineligibleperiod"
import requests from "./requests"
import comment from "./comment"
import setting from "./setting"

export default  combineReducers({
 users, ineligibleperiod , requests ,comment, setting
});

