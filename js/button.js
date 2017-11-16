var changeBG = document.querySelector("#change-bg")
var colors = ["pink", "green", "blue", "purple", "red"];
var clicks = 0;

changeBG.addEventListener("click", function() {
  changeBG.body.style.backgroundColor = colors[clicks];
  clicks++;
  if (clicks === colors.length) {
    clicks = 0;
  }

  changeBG.addEventListener("click",changeBtnColor);
});
