//1
document.getElementById("animals").style.fontSize = "x-large"; 

//гуд, але треба було то винести в окрему функцію

//2
document.getElementById("cat").nextElementSibling.style.backgroundColor = "blue";

//те саме

//3
let rem = document.getElementById("animals"); 
//назва змінної неочевидна, і, якщо в тебе ця змінна більше ніде не перевизначається - використовуй const замість let

 function remClass(rem){ //лишній проблі перед function
  rem.lastElementChild.classList.remove("wild", "dangerous");
};

remClass(rem);

//4
let elem = document.getElementsByClassName("dangerous");

function setColor(elem) {
  for (let i=0; i<elem.length; i++) {
    elem[i].style.color = "red";
  }
};
setColor(elem);

//і у функції, і поза нею - однакова назва у змінних, такого ліпше уникати

//5
let remel = document.querySelectorAll(".pet").forEach(el => {

   el.classList.remove("pet") //лишній пробіл, забула крапку з комою
  
}) 


//6
let ulBirds = document.getElementById('birds');
function addEleFirst(){
  let li = document.createElement('li');
  li.innerHTML = 'new bird';
  ulBirds.prepend(li)
}
addEleFirst();

//в функціях ліпше не взаємодіяти з елементами, що визначенні поза нею. Краще або внести визначення
// в функцію, або ж передавати елемент як аргумент

//7
function addElemLast(){
  let li = document.createElement('li');
  li.innerHTML = 'last bird';
  ulBirds.append(li)
}
addElemLast();

//те саме

//8
let ul2 = document.getElementById('birds'); //неочевидна назва змінної
ul2.insertAdjacentHTML('beforebegin', '<ul id="fish"><li>one</li><li>two</li></ul>');
//треба було написати функцію