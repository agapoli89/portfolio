const squares = document.querySelectorAll('.square');

let i = 0; //pojawiające się kwadraty
const start = document.querySelector('.start');
const content = document.querySelectorAll('.content');
const cross = document.querySelectorAll('.cross')

const showSquares = setInterval(() => {
    squares[i].classList.remove('hidden');
    i++;
    if (i === squares.length) {
        clearInterval(showSquares);
    }
}, 500);

function backToStart() {

    const index = this.dataset.number;

    setTimeout(() => {
        const afterTransitionendContent = () => {
            console.log('transitback');
            content[index].style.display = "none";
            start.style.display = "flex";
            setTimeout(() => {
                start.style.opacity = 1;
            }, 100);
            content[index].removeEventListener('transitionend', afterTransitionendContent);
        }
        content[index].style.opacity = 0;
        content[index].addEventListener("transitionend", afterTransitionendContent);
    }, 200)
    removeEventListener('click', backToStart);
}

function addContent() {
    if (this === squares[3]) {
        return;
    };
    console.log('addContent');
    const afterTransitionendStart = () => {
        start.style.display = "none";
        content[index].style.display = "block";
        setTimeout(() => {
            content[index].style.opacity = 1;
        }, 100);
        start.removeEventListener('transitionend', afterTransitionendStart);
    }

    const index = this.dataset.number;
    setTimeout(() => {
        start.style.opacity = 0;
        start.addEventListener('transitionend', afterTransitionendStart);
    }, 100);


    removeEventListener('click', addContent);
    cross[index].addEventListener('click', backToStart)
}

squares.forEach(square => square.addEventListener('click', addContent));

