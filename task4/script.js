const userTextField = document.querySelector('#userTextField');

userTextField.addEventListener('click', (event) => {
    event.preventDefault();
    userTextField.textContent = prompt('Измените текст ссылки');
})


   
