'use strict'
//1
let arr=[[1,2], 2, ' string', {0: 'l', 1:'tt'}, ' hello', 42, ' world '];
function toCamelCase(array){
    let arr1= array.filter((el) =>{
        return typeof el==='string'
    });
    
    let str=arr1.join(' ').trim();

    return str.split(' ').map(function(word,index){

      if(index == 0){
        return word.trim().toLowerCase();
      }

      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
  }


console.log(toCamelCase(arr))


//2
let array = [1,2,3,4];
function numberToLetter(arr){
    let char = arr.map( el => {
        return String.fromCharCode(el+96)
    })
    return char
}


//3
let obj={a:22, b: -11.35, c:41.2, d:'hello'};

function objWithNumber(obj){
    let arr=Object.entries(obj).filter((el) => {
       return typeof el[1]==='number' && el[1] >= 0
    });
    return Object.fromEntries(arr)
}

