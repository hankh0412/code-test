var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = new JSDOM("").window;
global.document = document;

var $ = (jQuery = require("jquery")(window));

function getData() {
  return new Promise(function (resolve, reject) {
    $.get("https://jsonplaceholder.typicode.com/users/1", function (response) {
      if (response) {
        resolve(response); // 여기가 호출되면 아래 reject는 호출되지 않는다.
      }
      reject(new Error("Request is failed"));
    });
  });
}

// 위 $.get() 호출 결과에 따라 'response' 또는 'Error' 출력
getData()
  .then(function (data) {
    console.log(data); // response 값 출력
  })
  .catch(function (err) {
    console.error(err); // Error 출력
  });
