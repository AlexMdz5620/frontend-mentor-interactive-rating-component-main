const numbs = document.querySelectorAll('input');
const form = document.getElementById('form');
const span = document.getElementById('support');
const cardRatingState = document.getElementById('cardRatingState');
const cardThankYou = document.getElementById('cardThankYou');

numbs.forEach((item, index) => {
    item.addEventListener('click', () => selectNum(index));
});

function selectNum(index) {
    numbs[index].classList.add('numAct');
};

form.addEventListener('submit', (e) => {
    e.preventDefault()
    numbs.forEach(num => {
        if (num.className.includes('numAct')) {
            span.innerHTML = `You selected ${num.id} out of 5`;
            cardRatingState.style.display= 'none';
            cardThankYou.style.display= 'initial';
        };
    });
});