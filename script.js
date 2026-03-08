let toggleOn = document.querySelector("#toggle-on");
let toggleOff = document.querySelector("#toggle-off");
let togglelBtn = document.querySelector(".toggle-btn");

let check = 1;

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  toggleOn.style.display = "inline-block";
  toggleOff.style.display = "none";
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  toggleOff.style.display = "inline-block";
  toggleOn.style.display = "none";
};

togglelBtn.addEventListener("click", () => {
  check === 1 ? enableDarkmode() : disableDarkmode();
  console.log("hello");
});

toggleOn.addEventListener("click", disableDarkmode);
toggleOff.addEventListener("click", enableDarkmode);
