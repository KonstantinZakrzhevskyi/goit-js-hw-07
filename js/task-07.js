const input = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text')

input.addEventListener('input', onInputChange);

function onInputChange(event) {
  text.style.fontSize = input.value + 'px';
}


// let controlFont = document.getElementById("font-size-control");

// let text = document.getElementById("text");

// controlFont.oninput = function() {
//   text.style.fontSize = controlFont.value + "px";
// };