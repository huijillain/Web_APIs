var request = new XMLHttpRequest();

// go to GIPHY App page, copy API Key in dashboard. We checked leftside Random Endpoint API sectoin.
request.open(
  "GET",
  "https://api.giphy.com/v1/gifs/random?api_key=VzfywmJixNSChZWkFqnuM4oeiuglLLNi"
);

request.onload = function () {
  var response = request.response;

  //convert string to Data
  var parsedData = JSON.parse(response);
  console.log(parsedData);
};

request.send();
// received Data object & Meta object
