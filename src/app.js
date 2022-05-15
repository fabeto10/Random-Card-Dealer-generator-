window.onload = () => {
  //write your code here
  document.querySelector("#boton").onclick = () => {
    document.querySelector(".card").classList.add(generateRandomSuit());
    document.querySelector(".card").innerHTML = generateRandomNumber();
  };
  setInterval(() => {
    document.querySelector(".card").classList.add(generateRandomSuit());
    document.querySelector(".card").innerHTML = generateRandomNumber();
  }, 10000);
};
//input en proceso....
var input = document.querySelector("input");
input.addEventListener("input", resizeInput);
resizeInput.call(input);

function resizeInput() {
  this.style.width = this.value.length + "ch";
}
//Es un poco lento al cargar pero si lo hace, por lo menos para mi :)
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
  let suits = ["diamond", "spade", "heart", "club"];
  let indexSuit = Math.floor(Math.random() * suits.length);
  return suits[indexSuit];
};
