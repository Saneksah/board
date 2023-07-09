const board = document.querySelector('#board')
const SQUARES_NUMBER = 600;

const colors = ['#71C9CE', '#A6E3E9', '#CBF1F5', '#E3FDFD', '#E4F9F5', '#30E3CA', '#11999E', '#DEFCF9', '#CADEFC', '#B9D7EA']


for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))


    board.append(square);


}

function setColor(element) {
    const color = getColor()

    element.style.backgroundColor = color

    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d' 
    element.style.boxShadow = `0 0 2px #000`
}

function getColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
