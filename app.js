const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
const colors = ['#E9F7DB', '#D2EEC2', '#74DECF', '#51A2F1', '#4E55BA', '#302B40']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(e) {
    const color = getRandomColors()
    e.style.backgroundColor = color
    e.style.boxShadow = `0 0 2px ${color}`
}

function removeColor(e) {
    e.style.backgroundColor = '#1d1d1d'
    e.style.boxShadow = `0 0 2px #000`
}

function getRandomColors() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}