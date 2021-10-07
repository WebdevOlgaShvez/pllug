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
let elem = document.getElementsByClassName("pet");

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
let ulBirds = document.getElementById("birds");
function addElem(){
  let li = document.createElement('li');
  li.innerHTML = 'new bird';
  ulBirds.prepend(li)
}
addElem()