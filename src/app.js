//terminado
window.onload = () => {
  //write your code here
  const boton = document.querySelector("#boton");
  const card = document.querySelector(".card");
  const number = document.querySelector(".number");

  number.textContent = generateRandomNumber();
  card.classList.add(generateRandomSuit());

  const IntervalId = setInterval(() => {
    if (card.classList.length > 1) {
      card.classList.remove(card.className.replace("card", "").trim());
    }
    card.classList.add(generateRandomSuit());
    card.innerHTML = generateRandomNumber();
  }, 10000);
  boton.addEventListener("click", function() {
    if (card.classList.length > 1) {
      card.classList.remove(card.className.replace("card", "").trim());
    }
    card.classList.add(generateRandomSuit());
    card.textContent = generateRandomNumber();
    clearInterval(IntervalId);
  });
};
//input en proceso....
var input = document.querySelector("input");
input.addEventListener("input", resizeInput);
resizeInput.call(input);

function resizeInput() {
  this.style.width = this.value.length + "ch";
}
let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};
let generateRandomSuit = () => {
  let suits = ["diamon", "spade", "heart", "club"];
  let indexSuit = Math.floor(Math.random() * suits.length);
  return suits[indexSuit];
};
