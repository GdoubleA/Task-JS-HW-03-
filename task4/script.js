const userTextField = document.querySelector('#userTextField');

userTextField.addEventListener('click', function(event) {
    event.preventDefault();
    const userText = prompt('Измените текст ссылки');
    userTextField.textContent = userText;
})


   
