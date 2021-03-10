"use strict";

let input;
let total = 0;


do {
  input = +prompt("Введіть число");
  if (input) {
    total += input;
  }
  console.log(total);
} while (input);

alert (input + total);
