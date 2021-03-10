"use strict";

let usercountry = prompt("Введіть вашу країну");

let cost;

switch (usercountry) {
  case "Китай":
    cost = 100;
    console.log(`Доставка в ${usercountry} буде коштувати ${cost} кредитів`);
    break;

  case "Чилі":
    cost = 250;
    console.log(`Доставка в ${usercountry} буде коштувати ${cost} кредитів`);
    break;

  case "Австралія":
    cost = 170;
    console.log(`Доставка в ${usercountry} буде коштувати ${cost} кредитів`);
    break;

  case "Індія":
    cost = 80;
    console.log(`Доставка в ${usercountry} буде коштувати ${cost} кредитів`);
    break;

  case "Ямайка":
    cost = 120;
    console.log(`Доставка в ${usercountry} буде коштувати ${cost} кредитів`);
    break;

  default:
    console.log(`Доставка в ${usercountry} буде коштувати ${cost} кредитів`);
}
