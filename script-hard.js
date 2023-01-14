'use strict';


const func1 = (str) => {
  str = prompt('Введите данные', '');
  str = str.trim();
  if (!isNaN(str)) {
    console.log("Это не строка!")
  } else {
    if (str.length > 30) {
      console.log(str.slice(0, 30) + '...')
    } else {
      console.log(str)
    }
  }
}
func1()