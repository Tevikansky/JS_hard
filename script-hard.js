'use strict';
const day = document.getElementById('day');
const time = document.getElementById('time');

const days_ru = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const mounths_ru = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
let myDate = new Date();
let Date_ru = "Сегодня: " + days_ru[myDate.getDay()] + "," + mounths_ru[myDate.getMonth()];

const Timer = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let mounths = date.getMonth();
  if (hours < 10) {
    hours = "0" + date.getHours();
  }
  if (minutes < 10) {
    minutes = "0" + date.getMinutes();
  }
  if (seconds < 10) {
    seconds = "0" + date.getSeconds();
  }
  if (mounths < 10) {
    mounths = "0" + (date.getMonth() + 1);
  }


  // if (6 < hours && hours < 12) {
  //   hello = "Доброе утро"
  // } else if ((22 < hours && hours < 23) || (0 < hours && hours <= 6)) {
  //   hello = "Доброй ночи"
  // } else if (12 <= hours && hours <= 16) {
  //   hello = "Добрый день"
  // } else {
  //   hello = "Добрый вечер"
  // }
  return {
    hours,
    minutes,
    seconds,
    mounths,
  };

}
const words = () => {
  let getTime = Timer();
  let wordHours = "";
  let wordMinutes = "";
  let wordSeconds = "";
  if (getTime.hours >= 5 && getTime.hours <= 20) {
    wordHours = "часов"
  } else if (getTime.hours === 1 || getTime.hours === 21) {
    wordHours = "час"
  } else {
    wordHours = "часа"
  }
  if ((getTime.minutes >= 2 && getTime.minutes <= 4) || (getTime.minutes >= 22 && getTime.minutes <= 24) || (getTime.minutes >= 32 && getTime.minutes <= 34) || (getTime.minutes >= 42 && getTime.minutes <= 44) || (getTime.minutes >= 52 && getTime.minutes <= 54)) {
    wordMinutes = "минуты"
  } else if ((getTime.minutes >= 5 && getTime.minutes <= 20) || (getTime.minutes >= 25 && getTime.minutes <= 30) || (getTime.minutes >= 35 && getTime.minutes <= 40) || (getTime.minutes >= 45 && getTime.minutes <= 50) || (getTime.minutes >= 55 && getTime.minutes <= 60)) {
    wordMinutes = "минут"
  } else {
    wordMinutes = "минута"
  }
  if ((getTime.seconds >= 2 && getTime.seconds <= 4) || (getTime.seconds >= 22 && getTime.seconds <= 24) || (getTime.seconds >= 32 && getTime.seconds <= 34) || (getTime.seconds >= 42 && getTime.seconds <= 44) || (getTime.seconds >= 52 && getTime.seconds <= 54)) {
    wordSeconds = "секунды"
  } else if ((getTime.seconds >= 5 && getTime.seconds <= 20) || (getTime.seconds >= 25 && getTime.seconds <= 30) || (getTime.seconds >= 35 && getTime.seconds <= 40) || (getTime.seconds >= 45 && getTime.seconds <= 50) || (getTime.seconds >= 55 && getTime.seconds <= 60)) {
    wordSeconds = "секунд"
  } else {
    wordSeconds = "секунда"
  }
  return {
    wordHours,
    wordMinutes,
    wordSeconds
  };

}

const updateClock = () => {
  let getTime = Timer();
  let timerHours = getTime.hours;
  let timerMinutes = getTime.minutes;
  let timerSeconds = getTime.seconds;
  let timerMounths = getTime.mounths;
  let getWords = words();
  let wordHours = " " + getWords.wordHours + " ";
  let wordMinutes = " " + getWords.wordMinutes + " ";
  let wordSeconds = " " + getWords.wordSeconds + " ";
  day.textContent = "Сегодня " + days_ru[myDate.getDay()] + ", " + myDate.getDate() + " " + mounths_ru[myDate.getMonth()] + " " + myDate.getFullYear() + ", " + timerHours + wordHours + timerMinutes + wordMinutes + timerSeconds + wordSeconds;
  time.textContent = myDate.getDate() + "." + timerMounths + "." + myDate.getFullYear() + " - " + timerHours + ":" + timerMinutes + ":" + timerSeconds;

}

setInterval(updateClock, 1000)