const counterValue = document.querySelector('#value');
const decrementBtnn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtnn.addEventListener('click', onDecrementClick);
incrementBtn.addEventListener('click', onIncrementClick);

function onDecrementClick() {
  counterValue.textContent -= 1;
}

function onIncrementClick() {
counterValue.textContent = Number(counterValue.textContent) + 1;
}