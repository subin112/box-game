const items = document.querySelectorAll('.item');
const firstBox = document.querySelector('.first-box');
const secondBox = document.querySelector('.second-box');
const thirdBox = document.querySelector('.third-box');
const boxes = document.querySelectorAll('.box');

let boxClicked = 0;

items.forEach(item => {
    item.addEventListener('click', () => {
        const mob = document.createElement('div');
        mob.classList.add('mobile');
        mob.innerText = item.innerText;
        mob.style.backgroundColor = item.style.backgroundColor;
        firstBox.appendChild(mob);
        item.style.display = 'none';
    });
});

boxes.forEach(box => {
    box.addEventListener('click', (speed) => {
        const clickedBox = speed.currentTarget;
        if (boxClicked) {
            console.log(clickedBox)
            moveTopElement(boxClicked, clickedBox);
            boxClicked = null; 
        } else {
            boxClicked = clickedBox; 
        }
    });
});

function moveTopElement(from, to) {
    const lastElement = from.lastElementChild;
    if (lastElement) {
        to.appendChild(lastElement);
    }
}