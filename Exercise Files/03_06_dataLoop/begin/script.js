var request = new XMLHttpRequest();

request.open("GET", "https://hplussport.com/api/products?order=name"); // Now we display all products.

request.onload = function () {
  var response = request.response;
  var parsedData = JSON.parse(response);
  console.log(parsedData);

  for (item in parsedData) {
    // loop through parsedData

    // // Display products by name
    // var name = parsedData[item].name;
    // var products = document.createElement("li");
    // products.innerHTML = name;
    // document.body.appendChild(products);

    // Display products images
    var imageUrl = parsedData[item].image;
    var images = document.createElement("img");
    images.setAttribute("src", imageUrl);
    document.body.appendChild(images);
  }
};

request.send();
