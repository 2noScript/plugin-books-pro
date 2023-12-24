import request from "./utils/request.js";

request({
  method: "GET",
  url: "",
}).then((res) => {
  console.log(res?.data);
});
