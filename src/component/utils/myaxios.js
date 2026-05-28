import axios from "axios";

const myAxios = axios.create({
  baseURL: "https://appy.trycatchtech.com/v3/puneri_paltan",
});

// Request Interceptor
myAxios.interceptors.request.use(
  function (config) {
    console.log("Request Sent");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Response Interceptor
myAxios.interceptors.response.use(
  function (response) {
    console.log("Response Received");
    return response;
  },
  function (error) {
    console.log("Response Error");
    return Promise.reject(error);
  }
);

// Example
// myAxios.get("/category")
// myAxios.post("/product", data)

export default myAxios;