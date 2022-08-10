//import  axiosInstance  from "../api/auth";

import axios from "axios";

function login() {
  const promise = axios.get(
    "http://localhost:8080/api/v1/user-admin/users?page_num=0&limit=2"
  );
  return response2(promise)
}

function response2(promise) {
  return new Promise((resolve, reject) => {
    promise.then(function (response) {
      resolve(response.data);
    });
  });
}

export { login };
