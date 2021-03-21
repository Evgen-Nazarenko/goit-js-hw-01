"use strict";

const ADMIN_PASSWORD = "12345";

let password = prompt("Введіть пароль");

let message;


if (password) {
  if (password === ADMIN_PASSWORD) {
    message = "Ласкаво просимо!";
    console.log(message);
  } else {
    message = "Доступ заборонений, невірний пароль!";
    console.log(message);
  }
} else {
  console.log("Скасовано користувачем!");
}
