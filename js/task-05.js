const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output')

// console.log(input);
// console.log(output);

input.addEventListener('input', onInputChenge);

function onInputChenge(event) {
  if (input.value === '') {
    output.textContent = 'незнакомец'; 
  } else {
    output.textContent = event.currentTarget.value;
  } 
}