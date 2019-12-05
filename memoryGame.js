let pause = true;
function enterName() {
  var text;
  var person = prompt("Please enter your name:");
  if (person == null || person == "") {
    text = "Hi Anonymous! Try match all the tiles as quickly as you can! Good Luck!";
  } else {
    text = "Hi " + person + "! Try match all the tiles as quickly as you can! Good Luck!"
  }
  pause = !pause;
  document.getElementById('username').innerHTML = text;
};

let count = 1;
setInterval(() => {
  if (!pause) {
    document.getElementById('timer').innerHTML = '00:'+count;

    if (count == 0) {
      alert('won');
      pause = true;
    }
    count++;
  }
}, 1000);

const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function change() {
  var elem = document.getElementById("btn");
  if (elem.value == "Start") elem.value = "Pause";
  else elem.value = "Start";
}

function flipCard() {
  if(lockBoard) return;
  if(this === firstCard) return;

  this.classList.add('flip');

  if(!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkMatch();
}

function checkMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();

  /*if(firstCard.dataset.framework === secondCard.dataset.framework) {
    return disableCards();
  }
    else {
      unflipCards();
    }*/
};


  //isMatch ? disableCards() : unflipCards();


function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

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

cards.forEach(card => card.addEventListener('click', flipCard));

