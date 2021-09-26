/* let result = '';
let i = 0;
do {
   i += 1;
   result += i + ' ';
} 
while (i > 0)
console.log(result) */

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
console.log(changeStr('Test'))
