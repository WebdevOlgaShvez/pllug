//1
document.getElementById("animals").style.fontSize = "x-large"; 

//2
document.getElementById("cat").nextElementSibling.style.backgroundColor = "blue";

//3
let rem = document.getElementById("animals");

 function remClass(rem){
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

//5
let remel = document.querySelectorAll(".pet").forEach(el => {

   el.classList.remove("pet")
  
}) 


//6
let ulBirds = document.getElementById('birds');
function addEleFirst(){
  let li = document.createElement('li');
  li.innerHTML = 'new bird';
  ulBirds.prepend(li)
}
addEleFirst();

//7
function addElemLast(){
  let li = document.createElement('li');
  li.innerHTML = 'last bird';
  ulBirds.append(li)
}
addElemLast();

//8
let ul2 = document.getElementById('birds');
ul2.insertAdjacentHTML('beforebegin', '<ul id="fish"><li>one</li><li>two</li></ul>');