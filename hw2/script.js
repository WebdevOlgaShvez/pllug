/* let result = '';
let i = 0;
do {
   i += 1;
   result += i + ' ';
} 
while (i > 0)
console.log(result) */
//Нескінченний цикл можна зробити ще і так - while(true){}

// Скрипт не підвісив браузер, натомість просто видав помилку "Invalid string length"

function changeStr(str){
let new_str = "";
    
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      new_str += str[i].toUpperCase();
    } else {
      new_str += str[i].toLowerCase();
    }
  }
  return new_str;
}
console.log(changeStr('Test123'))

// Це завдання працює гуд

/*
 * Декілька зауважень:
 * 1) Рекомендую використовувати 'use strict'
 * 2) Де-не-де забував в кінці крапку з комою
 * 3) Для зміних використовую camelCase
 * 4) Використання подвійних лапок вважається поганим стилем
 */
