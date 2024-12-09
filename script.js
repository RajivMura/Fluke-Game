let cardsArray = [
    {
        'name': 'CSS',
        'img': './Assets/css.jpg',
    },
    {
        'name': 'HTML',
        'img': './Assets/html.webp',
    },
    {
        'name': 'C++',
        'img': './Assets/c++.jpg',
    },
    {
        'name': 'JS',
        'img': './Assets/JavaScript.png',
    },
    {
        'name': 'Node',
        'img': './Assets/nodejs.png',
    },
    {
        'name': 'Python',
        'img': './Assets/python.png',
    }
];






const parentDiv = document.querySelector('#card-section');

// duplicate each card
const gameCard = cardsArray.concat(cardsArray); // so that we can get 12 , duplicate of previous image


let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random()); // for shuffling the box whenever it will refresh
  
    
for (let i = 0; i < shuffledChild.length; i++) {
    const childDiv = document.createElement('div')
    childDiv.classList.add('card');
    childDiv.dataset.name = shuffledChild[i].name;
    //childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;

    const front_div = document.createElement('div');
    front_div.classList.add('front-card')

    const back_div = document.createElement('div');
    back_div.classList.add('back-card')

    back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;

    parentDiv.appendChild(childDiv)


    childDiv.appendChild(front_div)
    childDiv.appendChild(back_div)

}




//step 6th
// for continuing paly the game , because we have put condition to click only 2 times ,now here again we are normalising
const resetGame = () => {
    clickCount = 0;
    firstCard = ''; // again we are removing firstCard , firstCard = empty, other previous data will be remain in the variable firstCard.
    secondCard = ''; //again we are removing secondCard, secondCard = empty,
    let cards_selected = document.querySelectorAll('.card_selected');
    cards_selected.forEach((curElem) => {
        curElem.classList.remove('card_selected')
    })
    
}


//step 5th
//if matching both the element change the border color
const card_matches = () => {
    let cards_selected = document.querySelectorAll('.card_selected');
    cards_selected.forEach((curElem) => {
        curElem.classList.add('card_match')
    })

}




//step 4th
let clickCount = 0; //clicking counting


parentDiv.addEventListener('click', (even) => {  // box to select
    let curCard = even.target; // current card , as soon as user clicked
    if (curCard.id === 'card-section') { return false } // if we click on the gap between the box it will not selected teh whole div which is <section>
    clickCount++;
    if (clickCount < 3) {   //  to selected only 2 box at a time

        if (clickCount === 1) {
            firstCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected') //we have added a class called card_selected to first click element.
        } else {
            secondCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected')//we have added a class called card_selected to second click element.
        }

        if (firstCard !== '' && secondCard !== '') {
            if (firstCard === secondCard) {
                //curCard.classList.add('card_match') // it will not change the border color or both matching element.
                setTimeout(() => { //for delay after clicking
                    card_matches(); // we are calling a function to change the border color of both the matching element.
                    resetGame(); // for continuing the game

                    
                }, 1000)
                
            } else {
                setTimeout(() => {
                    resetGame();
                })
                
            }
        }
      
        
    }
    

})








