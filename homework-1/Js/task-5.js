"use strict";

let usercountry = prompt("Введіть вашу країну");

let cost;

switch (usercountry) {
  case "Китай", "китай":
    cost = 100;
    console.log(`Доставка в ${usercountry} буде коштувати ${cost} кредитів`);
    break;

  case "Чилі", "чилі":
    cost = 250;
    console.log(`Доставка в ${usercountry} буде коштувати ${cost} кредитів`);
    break;

  case "Австралія", "австралія":
    cost = 170;
    console.log(`Доставка в ${usercountry} буде коштувати ${cost} кредитів`);
    break;

  case "Індія", "індія":
    cost = 80;
    console.log(`Доставка в ${usercountry} буде коштувати ${cost} кредитів`);
    break;

  case "Ямайка", "ямайка":
    cost = 120;
    console.log(`Доставка в ${usercountry} буде коштувати ${cost} кредитів`);
    break;

  default:
    console.log(`Доставка в ${usercountry} буде коштувати ${cost} кредитів`);
}
