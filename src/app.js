/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //Selector de Clases
  document.querySelector(".Card").classList.add(generateRandomSuit());
  document.querySelector(".numb").innerHTML = generateRandomNumber();
  document.querySelector(".button").addEventListener("click", () => {
    document
      .querySelector(".Card")
      .classList.replace(generateRandomSuit(), generateRandomSuit2());
    document.querySelector(".numb").innerHTML = generateRandomNumber();
  });
};
// Generador de Numeros
let generateRandomNumber = () => {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};
// Generador de Palos
let generateRandomSuit = () => {
  let suit = ["diamond", "spade", "club", "heart"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
let generateRandomSuit2 = () => {
  let suit2 = ["diamond", "spade", "club", "heart"];
  let indexSuit2 = Math.floor(Math.random() * suit2.length);
  return suit2[indexSuit2];
};
