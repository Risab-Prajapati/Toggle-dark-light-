let darkMode = document.querySelector(".toggle-on");
let lightMode = document.querySelector(".toggle-off");
let center = document.querySelector(".center");
let footer = document.querySelector(".footer");
let logo = document.querySelector(".header .logo");
let menu = document.querySelector(".lists");

let check = 1;

lightMode.addEventListener("click", () => {
  if (check == 1) {
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";
    footer.style.color = "white";
    logo.style.color = "white";
    menu.style.color = "white";
    darkMode.style.display = "block";
    check = 0;
  }
});

darkMode.addEventListener("click", () => {
  if (check == 0) {
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
    footer.style.color = "black";
    logo.style.color = "black";
    menu.style.color = "black";
    darkMode.style.display = "none";
    check = 1;
  }
});
