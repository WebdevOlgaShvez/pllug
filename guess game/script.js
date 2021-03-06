

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


// Some global variable!
let toggledCards=[]; // to store cards in this array!
/*
these 2 variables for checking if we mathed
all cards together in Win function to call
gameOver method to print final score model
*/
let matched= 0;
const allPairs= 8;
// to count our number of moves
let moves= 0;
/*
these 3 variables are needed to calculte the time
during playing the game!
*/
let time= 0;
let clockOff= true;
let clockId;


// create a deck variable to store elements with deck class!
const deck= document.querySelector('.deck');

// create a function to shuffle tke cards every new game!

function shuffleDeck() {
  const cardsForShuffling= Array.from(document.querySelectorAll('.deck li'));
  const shuffledCards= shuffle(cardsForShuffling);
  for(card of shuffledCards){
    deck.appendChild(card);
  }
}
 shuffleDeck();

// adding an event listener card on the deck
deck.addEventListener('click', appearCard);

function appearCard (){
  const press= event.target;
  if (press.classList.contains('card') && !press.classList.contains('match') && toggledCards.length < 2 && !toggledCards.includes(press)){
   // initilaize the timer for every new game
     if (clockOff){
       clockBegins();
       clockOff = false;
     }
     // call the next two function to flip over the card and add them into array
     toggleCard(press);
     addToggledCard(press);
     // if the array of cards has 2 cards only we gonna apply match  and move func on them
     if (toggledCards.length === 2){
       isMatch(press);
       addMoves();
       checkingScore();
     }
  }
}

// create a function to flip over the card

function toggleCard(press){
  press.classList.toggle('open');
  press.classList.toggle('show');
}

// create this card to push the filped card into the Array

function addToggledCard(press){
  toggledCards.push(press);
  console.log(toggledCards);
}


// create a function for checking the match cards.

function isMatch() {
  if (toggledCards[0].firstElementChild.className ===
       toggledCards[1].firstElementChild.className) {
         toggledCards[0].classList.toggle('match');
         toggledCards[1].classList.toggle('match');
         toggledCards= [];
         matched++;
         setTimeout(function(){
           win();
         },1000)
       }
       // if they are not matched will filp them over back again
       else {
         setTimeout(function (){
           toggleCard(toggledCards[0]);
           toggleCard(toggledCards[1]);
           toggledCards= [];
           alert('Try again')  
         }, 1000);
         
       }
     }

// create a function to increase moves!
 function addMoves() {
   moves +=1;
   const movesCount= document.querySelector('.moves');
   movesCount.innerHTML= moves;
 }

// the next function to handle score
/* 
 function checkingScore(){
   if(moves===16 || moves === 24){
     removingStar();
   }
 }


function removingStar(){
  const stars= document.querySelectorAll('.stars li');
  for (star of stars){
    if(star.style.display !== 'none'){
      star.style.display= 'none';
      break
    }
  }
} */

// calculte the time during game playing

function clockBegins () {
  clockId= setInterval(function(){
    time +=1;
    showTime();
    console.log(time);
  }, 1000);
}

function showTime() {
  const clock= document.querySelector('.clock');
  clock.innerHTML= time;
  const minutes= Math.floor(time/60);
  const seconds= time % 60;
  if (seconds < 10){
    clock.innerHTML= `${minutes}:0${seconds}`;
  } else {
    clock.innerHTML= `${minutes}:${seconds}`;
  }
}

function stopClock() {
  clearInterval(clockId);
}

// toggle the model

function toggleModel() {
  const model= document.querySelector('.backgroundModel');
  model.classList.toggle('hide');
}

// print all score info on the model

function printModelStatus() {
  const timeStatus= document.querySelector('.timeModel');
  const clockTime= document.querySelector('.clock').innerHTML;
  const movesStatus= document.querySelector('.movesModel');
/*   const starsStats= document.querySelector('.starsModel');
  const stars= getStars(); */
  timeStatus.innerHTML= `Time = ${clockTime}`;
  movesStatus.innerHTML= `Moves = ${moves}`;
  //starsStats.innerHTML= `Stars = ${stars}`;
}

/* function getStars() {
  stars= document.querySelectorAll('.stars li');
  starCount= 0;
  for (star of stars) {
    if (star.style.display !== 'none'){
      starCount +=1;
    }
  }
  console.log(starCount);
  return starCount;
} */

// event listeners to the model
document.querySelector('.cancelModel').addEventListener('click', function(){
  toggleModel();
});

document.querySelector('.replayModel').addEventListener('click', restartGame);

// function to reset the game!

function resetGame() {
 // reset time
  stopClock();
  clockOff= true;
  time= 0;
  showTime();
  // reset moves
 moves= 0;
 document.querySelector('.moves').innerHTML= moves;
 
  // reset matching
  matched= 0;
  shuffleDeck();
  resetCards();
}

document.querySelector('.restart').addEventListener('click', resetGame);


 function gameOver() {
   stopClock();
   printModelStatus();
   toggleModel();
   resetCards();
 }

function resetCards() {
  const cards= document.querySelectorAll('.deck li');
  for (card of cards){
    card.className= 'card';
  }
}

function win () {
  if (matched === allPairs){
    gameOver();
  }
}

function restartGame() {
  resetGame();
  toggleModel();
  resetCards();
}

/* const cards = document.querySelectorAll('.memory-card');
let div = document.getElementById('card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;  
  
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;

  checkForMatch();
}

function deleteCard() {

 cards.style.display = 'none';
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  //isMatch ? disableCards() : unflipCards();
  if (isMatch) {
    setTimeout(() => {
   this.style.display = 'none';
   
      
    }, 3500);
   
  } else {
    unflipCards();
  }

}

function disableCards() {

  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  //resetBoard();
  setTimeout(() => {
    deleteCard();
    
  }, 3500);
  
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    alert('try again');
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
  
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard)); */