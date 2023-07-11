document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'I want to become a teacher.'
    },
    {
      name: '1',
      img: 'Chci se stát učitelem.'
    },
    {
      name: '2',
      img: 'I want to teach children.'
    },
    {
      name: '2',
      img: 'Chci učit děti.'
    },
    {
      name: '3',
      img: 'She wants to be a doctor.'
    },
    {
      name: '3',
      img: 'Ona chce být lékařkou.'
    },
    {
      name: '4',
      img: 'Her dream is to cure people.'
    },
    {
      name: '4',
      img: 'Jejím snem je léčit lidi.'
    },
    {
      name: '5',
      img: 'Can you drive a car?'
    },
    {
      name: '5',
      img: 'Umíš řídit auto?'
    },
    {
      name: '6',
      img: 'Yes, I am a good driver.'
    },
    {
      name: '6',
      img: 'Ano, jsem dobrý řidič .'
    },
    {
      name: '7',
      img: 'How many cars have you got?'
    },
    {
      name: '7',
      img: 'Kolik máš aut?'
    },
    {
      name: '8',
      img: 'I have two cars and three bicycles.'
    },
    {
      name: '8',
      img: 'Mám dvě auta a tři kola.'
    },
    {
      name: '9',
      img: 'Come and play cards with me.'
    },
    {
      name: '9',
      img: 'Pojď si se mnou zahrát karty.'
    },
    {
      name: '10',
      img: 'I would rather play basketball.'
    },
    {
      name: '10',
      img: 'Raději bych hrál basketbal.'
    },
    {
      name: '11',
      img: 'Are you good at playing football?'
    },
    {
      name: '11',
      img: 'Jsi dobrý v hraní fotbalu?'
    },
    {
      name: '12',
      img: 'Not at all.'
    },
    {
      name: '12',
      img: 'Vůbec ne.'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  /* function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const cardd = document.createElement('div')
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')

      const cardtext = document.createElement('h5')
      cardtext.textContent = i+1
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      cardd.appendChild(card)
      grid.appendChild(cardd)
      cardd.appendChild(cardtext)
    }
  } */


  function createBoard() {
    cardArray.forEach (function (item, i ) {
      const cardd = document.createElement('div')
      cardd.setAttribute('class', "box")
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')

      const cardtext = document.createElement('h5')
      cardtext.textContent = item.img
      cardd.setAttribute('data-id', i)
      cardd.addEventListener('click', flipCard)
      cardd.appendChild(card)
      grid.appendChild(cardd)
      cardd.appendChild(cardtext)
    })
  }  

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
     if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')

cards[optionOneId].parentElement.classList.remove("green")
      

      

      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      var audio = new Audio ("images/sound.mp3")
audio.play();
      // alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
      cards[optionOneId].parentElement.setAttribute('class', 'hide')
      cards[optionTwoId].parentElement.setAttribute('class', 'hide')

    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      cards[optionOneId].parentElement.classList.remove("green")
      cards[optionTwoId].parentElement.classList.remove("green")
      var audio1 = new Audio ("images/nothing.mp3")
audio1.play();
      // alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 8 completed!</h2><a href='https://elaidina.github.io/eng1/level9.html'> Continue to Level 9</a>";


      var audio3 = new Audio ("images/end.mp3")
audio3.play();
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    
    this.classList.add("green")
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
    
  }

  createBoard()
})
