/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let numbers = [
  "A",
  "1",
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
let symbols = ["♠", "♣", "♦", "♥"];

window.onload = function() {
  let randomNumber = Math.floor(Math.random() * numbers.length);
  let randomSymb = Math.floor(Math.random() * symbols.length);
  if (symbols[randomSymb] == "♦") {
    document.getElementById("cardSymbol").style.color = "red";
    document.getElementById("cardNumber").style.color = "red";
    document.getElementById("invertedSymbol").style.color = "red";
  } else if (symbols[randomSymb] == "♥") {
    document.getElementById("cardSymbol").style.color = "red";
    document.getElementById("cardNumber").style.color = "red";
    document.getElementById("invertedSymbol").style.color = "red";
  }

  let topx = numbers[randomNumber];
  let bottomx = topx;

  document.querySelector("#cardSymbol").innerHTML = topx;
  document.querySelector("#cardNumber").innerHTML = symbols[randomSymb];
  document.querySelector("#invertedSymbol").innerHTML = bottomx;
};
