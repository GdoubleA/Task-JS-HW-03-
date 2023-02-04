const input = document.querySelector('input')
const button = document.querySelector('#button')
const duplicateField = document.querySelector('#duplicateField')

button.addEventListener('click', event => {
    duplicateField.textContent = input.value;
    console.log(input.value)
    input.value = '';
    event.preventDefault();  
});

input.addEventListener('keydown', event => {
   if ( event.keyCode === 13 ) {
    // Кнопка Enter
    duplicateField.textContent = input.value;
    console.log(input.value)
    input.value = '';
    event.preventDefault();
   }
});