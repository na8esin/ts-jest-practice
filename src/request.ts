// ブラウザでは普通に使える, ts-nodeでも使える
const request = new Request("https://www.mozilla.org/favicon.ico");

const url = request.url;
console.log(url);

const method = request.method;
const credentials = request.credentials;

fetch(request)
  .then((response) => response.blob())
  .then((blob) => {
    console.log(blob);
  });
