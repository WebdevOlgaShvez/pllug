'use strict'

const obj = {};
//
const o = Object.create(null);
//
obj.name = 'Ann';
obj['age'] = '30';

//
const arr = [];
//
const arr1 = new Array(100500);
//
const arr2 = [1, 2, 3, 4];
arr2.length = 0;

//
let arr4 = [1, 2, 3, 4, 5];
function delElement(arr, ind){
    arr.splice(ind, 1)
    return arr
};
delElement(arr4, 2);

//
function x (array){
    if (array.length){
        return true
    } else return false

};

//
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
};
let ann = {};
isEmpty(ann);

//
let aa = [1,2,3];
let bb = [4, 5, 6];

function concatArray(arr1, arr2){
    let arr3 = arr1.concat(arr2);
    return arr3;

};
concatArray(aa, bb);

//
function arrayToPow(array){
    let array1 = array.map((el) => el**3);
    return array1;
};

arrayToPow(bb);

//
let dd =[1,2,3,6,9,10];
function arrayIsOdd(array){
 let arr1= array.filter((el) => el%2!==0);
    return arr1;
}
arrayIsOdd(dd);

//
function arrInt(array) {
let arr1 = array.filter((el) =>Number.isInteger(el))
return arr1
};
let ss= [1, 2.5, 3.5, 6];

arrInt(ss);

//
function sum(a, b) {
    const result = a + b;
  };