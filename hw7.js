

let obj = {};
let obj2 = Object.create(null);
let map = new Map();
let n ;

n = 10000000;

for (let i = 0; i < n; i++) {
  obj[i] = i;
 
}
for (let i = 0; i < n; i++) {
  
  obj2[i] = i;

}
for (let i = 0; i < n; i++) {

  map.set(i, i);
}

 // 10000000
console.log('for 10 000 000');

console.time('Object');
obj[n] = n;
console.timeEnd('Object'); 

console.time('Object2');
obj2[n] = n;
console.timeEnd('Object2');

console.time('Map');
map.set(n, n);
console.timeEnd('Map');

// value
/* console.log('is value');
let result;

console.time('Object');
result = obj.hasOwnProperty('999999');
console.timeEnd('Object'); */

/* console.time('Object2');
result = obj2.hasOwnProperty('999999');
console.timeEnd('Object2'); */

/* console.time('Map');
result = map.has(999999);
console.timeEnd('Map'); */

//delete key
/* console.log('delete key');

console.time('Object');
delete obj[n];
console.timeEnd('Object');

console.time('Map');
map.delete(n);
console.timeEnd('Map'); */


// 10000
/* console.log('for 10000');
n = 10000;

for (let i = 0; i < n; i++) {
    obj[i] = i;
    obj2[i] = i;
    map.set(i, i);
  }
   
  console.time('Object');
  obj[n] = n;
  console.timeEnd('Object');
  
  console.time('Object2');
  obj2[n] = n;
  console.timeEnd('Object2');
  
  console.time('Map');
  map.set(n, n);
  console.timeEnd('Map');
 */

// 100
  /* n = 100;

  for (let i = 0; i < n; i++) {
      obj[i] = i;
      obj2[i] = i;
      map.set(i, i);
    }
     
    console.time('Object');
    obj[n] = n;
    console.timeEnd('Object');
    
    console.time('Object2');
    obj2[n] = n;
    console.timeEnd('Object2');
    
    console.time('Map');
    map.set(n, n);
    console.timeEnd('Map'); */


// ----перетворити обєкт у  Мар  ----------------  
  const objToMap = obj => {
    const map = new Map;
    Object.keys(obj).forEach(key => { map.set(key, obj[key]) });
    return map;
  };
  
  // ---перетворити Мар у обєкт----------  
  const mapToObj = map => {
    const obj = {};
    map.forEach((key, value) => { obj[key] = value });
    return obj;
  };