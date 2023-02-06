const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
console.log('Служит для вывода информации в консоль');
})

const alert1 = document.querySelector('#alert1');

alert1.addEventListener('click', () => {
    alert('Служит для вывода информации в сплывающем окне');
})

const prompt1 = document.querySelector('#prompt1');

prompt1.addEventListener('click', () => {
    const prompt1 = prompt('Служит для вывода информации в консоль');
    console.log(prompt1)
})
