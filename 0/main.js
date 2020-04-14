const square = document.getElementById('square');

square.addEventListener('click', fallDown);

function fallDown() {
    square.classList.add('fadeOutRight')
}