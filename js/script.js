// document.querySelector will return a single element the criteria within the ()
var header = document.querySelector("#header")
header.textContent = "Hello Friend.";

// document.querySelectorAll will return an array like a data structure which contains all elements that match the criteria passed with the ()
// var pStyles = document.querySelectorAll(".p-styles");

// for (var x = 0; x < pStyles.length; x++) {
//   pStyles[x].textContent = "I'm p-styles " + (x + 1);
// }
//
// pStyles[0].textContent = "Yo I'm first";
// pStyles[1].textContent = "pStyles 1 is lame.";

var lis = document.querySelectorAll("li");

for (var x = 0; x < lis.length; x++) {
  lis[x].textContent = x + 1;
}

lis[0].textContent = "1";
lis[1].textContent = "2";
lis[2].textContent = "3";

// another way to select an element by its ID is document.getElementById

document.getElementById("second-header").textContent = "Something";

var awesomes = document.getElementsByClassName("awesome");

for (var x = 0; x < awesomes.length; x++) {
  awesomes[x].textContent = x + 1;
}

var h3 = document.getElementsByTagName("h3");

for (var x = 0; x < h3.length; x++) {
  h3[x].textContent = "That is it";
}
