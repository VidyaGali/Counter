const result = document.querySelector("#value");
const allButtons = document.querySelectorAll(".btn");
// console.log(allButtons);
let count = 0;
//initial counter value is zero
//it will be incremented and decremented BY button

allButtons.forEach(function (button) {
  // console.log(button);
  button.addEventListener("click", function (e) {
    // console.log(event.currentTarget.classList);
    const styleBtn = e.currentTarget.classList;
    // console.log(styleBtn.contains("decrease"))
    if (styleBtn.contains("decrease")) {
      count--;
      // console.log(count)
    } else if (styleBtn.contains("increase")) {
      count++;
      // console.log(count)
    } else {
      count = 0;
    }

    if (count < 0) {
      result.textContent = count;
      result.style.color = "red";
    } else if (count > 0) {
      result.textContent = count;
      result.style.color = "green";
    } else {
      result.textContent = count;
      result.style.color = "grey";
    }
  });
});
