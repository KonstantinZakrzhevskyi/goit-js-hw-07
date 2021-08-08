const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  console.log(event);
  if (input.getAttribute('data-length') > input.value.length || input.getAttribute('data-length') < input.value.length) {
    input.classList.add('invalid');
  } else {
    input.classList.remove('invalid');
    input.classList.add('valid');
  }

}