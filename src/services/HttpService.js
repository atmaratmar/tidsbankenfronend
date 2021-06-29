import axios from "axios";
import UserService from "./UserService";

const HttpMethods = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PATCH: 'patch',
};

const _axios = axios.create();

const configure = () => {
  _axios.interceptors.request.use((config) => {

    if (UserService.isLoggedIn()) {
      const cb = () => {
        config.headers.Authorization = `Bearer ${UserService.getToken()}`;
        //config.headers.Authorization = `Bearer ${UserService.accessToken()}`;
        return Promise.resolve(config);
      };
      return UserService.updateToken(cb);
    }
  });
};
const getAxiosClient = () => _axios;
const HttpService = {
  HttpMethods,
  configure,
  getAxiosClient,
};
export default HttpService;
