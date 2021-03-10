"use strict";

let credits = 23580;

const pricePerDroid = 3000;

let TheNumberOfPerDroidPiecesThatUserWantsToBuy = prompt('Введіть числo ремонтних дроїдів, які ви хочете купити!');

let totalPrice;
let remainder;

if (!TheNumberOfPerDroidPiecesThatUserWantsToBuy) {
    console.log('Скасовано користувачем!');

} else {
    if (TheNumberOfPerDroidPiecesThatUserWantsToBuy * 1) {
        totalPrice = TheNumberOfPerDroidPiecesThatUserWantsToBuy * pricePerDroid;

        if (totalPrice > credits) {
            console.log('Не достатньо коштів на рахунку!');

        } else {
            remainder = credits - totalPrice;
            console.log(`Ви купили ${TheNumberOfPerDroidPiecesThatUserWantsToBuy} дроїдів, на рахунку залишилося ${remainder} кредитів`);
        alert(`Ви купили ${TheNumberOfPerDroidPiecesThatUserWantsToBuy} дроїдів, на рахунку залишилося ${remainder} кредитів`);
        };

    }
}
