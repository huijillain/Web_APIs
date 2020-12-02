var request = new XMLHttpRequest();

request.open(
  "GET",
  "https://api.giphy.com/v1/gifs/random?api_key=VzfywmJixNSChZWkFqnuM4oeiuglLLNi&tag=cats&rating=g"
);

request.onload = function () {
  var response = request.response;
  var parsedData = JSON.parse(response);
  console.log(parsedData);

  // search for original Url under: data/images/original/url  in Google console
  var originalUrl = parsedData.data.images.original.url;
  console.log(originalUrl);

  // Create a new HTML, add original Url to our page showing different images while we refresh the page
  var gif = document.createElement("img");
  gif.setAttribute("src", originalUrl);
  document.body.appendChild(gif);
};

request.send();
// We then opened link in google console
// Under data: bitly_git_url:"   "
// the link in "    " showing cats GIPHY :):)
// Pay attention to line 3:......?......&....&....

// What is going on with my request? HTTP Response Status Codes : 200s-good; 300s-redirect; 400s- client error; 500s-server error
