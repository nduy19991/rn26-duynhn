const input = document.querySelector(".input");
const eyeOpen = document.querySelector(".eye-open");
const eyeColse = document.querySelector(".eye-close");
eyeOpen.addEventListener("click", function () {
  eyeOpen.classList.add("hidden")
  eyeColse.classList.remove("hidden")
  input.setAttribute("type", "password")
});
eyeColse.addEventListener("click", function () {
    eyeOpen.classList.remove("hidden")
    eyeColse.classList.add("hidden")
    input.setAttribute("type", "text")
});