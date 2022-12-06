'use strict';

let num = 266219;
let num2 = num.toString().split('').reduce((a, b) => a * b, 1);
let num3 = num2 ** 3;

let namePerson = prompt("Введите имя");
let jobTitle = namePerson === "Артём" ? console.log("директор") : namePerson === "Александр" ? console.log("преподаватель") : console.log("студент");

const days_ru = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const days_en = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", " Friday", "Saturday"];
let myDate = new Date();
let lang = prompt("ru or en?");
let Date_ru = "Сегодня: " + days_ru[myDate.getDay()];
let Date_en = "Today is: " + days_en[myDate.getDay()];
let ourDate = lang === "ru" ? console.log(Date_ru) : lang === "en" ? console.log(Date_en) : console.log("Error");



if (lang === "ru") {
  console.log(Date_ru);
} else if (lang === "en") {
  console.log(Date_en);
} else {
  console.log("Error");
}

switch (true) {
  case lang === "ru":
    console.log(Date_ru);
    break;
  case lang === "en":
    console.log(Date_en);
    break;
  default:
    console.log("Error");
}



console.log(num2);
console.log(num3.toString().substr(0, 2));