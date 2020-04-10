document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cardArray = [
        {
            name: 'burger',
            img: 'assets/burger.png'
        },
        {
            name: 'burger',
            img: 'assets/burger.png'
        },
        {
            name: 'hotdog',
            img: 'assets/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'assets/hotdog.png'
        },
        {
            name: 'icrecream',
            img: 'assets/icecream.png'
        },
        {
            name: 'icrecream',
            img: 'assets/icecream.png'
        },
        {
            name: 'lol',
            img: 'assets/lol.png'
        },
        {
            name: 'lol',
            img: 'assets/lol.png'
        },
        {
            name: 'rabbit',
            img: 'assets/rabbit.png'
        },
        {
            name: 'rabbit',
            img: 'assets/rabbit.png'
        },
        {
            name: 'unicorn',
            img: 'assets/unicorn.png'
        },
        {
            name: 'unicorn',
            img: 'assets/unicorn.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    // create the board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'assets/blank2.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for card matches
    function checkForMatch() {
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'assets/white.png')
            cards[optionTwoId].setAttribute('src', 'assets/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'assets/blank.png')
            cards[optionTwoId].setAttribute('src', 'assets/blank.png')
            alert('Sorry, try again')
        }

        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length

        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    //flip the card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)

        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})