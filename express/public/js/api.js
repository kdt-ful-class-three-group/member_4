import apiMainList from "./apiMainList.js";
console.log("연결완");

fetch("data")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    apiMainList(data);
  })
  .catch((err) => {
    console.log(err);
  });
