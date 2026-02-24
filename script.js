let darkMode = document.querySelector(".toggle-on");
let lightMode = document.querySelector(".toggle-off");
let center = document.querySelector(".center");

let check = 1;

lightMode.addEventListener("click", () => {
  if (check == 1) {
    center.style.color = "white";
    center.style.backgroundColor = "black";
    check = 0;
  } else {
    darkMode.addEventListener("click", () => {
      darkMode.style.visibility = "visible";
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      check = 1;
    });
  }
});
