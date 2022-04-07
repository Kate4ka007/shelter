const petsCard1 = document.querySelector('.pets_card1');
const petsCard2 = document.querySelector('.pets_card2');
const petsCard3 = document.querySelector('.pets_card3');

const buttonSecondary1 = document.querySelector('.button_secondary1');
const buttonSecondary2 = document.querySelector('.button_secondary2');
const buttonSecondary3 = document.querySelector('.button_secondary3');

petsCard1.addEventListener('mouseover',() => {
    buttonSecondary1.style.backgroundColor = "#fddcc4";
    petsCard1.style.cursor = 'pointer';
});
petsCard1.addEventListener('mouseout', () => {
    buttonSecondary1.style.background = "none";
    petsCard1.style.cursor = 'default';
});
petsCard2.addEventListener('mouseover',() => {
    buttonSecondary2.style.backgroundColor = "#fddcc4";
    petsCard2.style.cursor = 'pointer';
});
petsCard2.addEventListener('mouseout', () => {
    buttonSecondary2.style.background = "none";
    petsCard2.style.cursor = 'default';
});
petsCard3.addEventListener('mouseover',() => {
    buttonSecondary3.style.backgroundColor = "#fddcc4";
    petsCard3.style.cursor = 'pointer';
});
petsCard3.addEventListener('mouseout', () => {
    buttonSecondary3.style.background = "none";
    petsCard3.style.cursor = 'default';
});



console.log('100/100:\nСоздана страница main +60\nСоздана страница our pets +40');
