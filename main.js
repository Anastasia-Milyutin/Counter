let button = document.querySelector(".counter");
let counterNomber = document.querySelector(".nomber");
let counter = 0;
button.addEventListener("click", function () {
  counter = counter + 1;
  counterNomber.innerText = counter;
});

let btn = document.querySelector(".reset");
btn.addEventListener("click", function () {
  counter = 0;
  counterNomber.innerHTML = counter;
});
