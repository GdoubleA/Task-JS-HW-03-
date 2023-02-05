// Automatic TrafficLight
const circles = document.querySelectorAll('.circle');
console.log(circles);
let activeLight = 0;

setInterval(() => {
    changeLight();
},1500);


function changeLight() {
    circles[activeLight].className = 'circle';
    activeLight++;

    if(activeLight > 2) {
        activeLight = 0
    }

    const currentLight = circles[activeLight];
    currentLight.classList.add(currentLight.getAttribute("color"))
}


// Click TrafficLight

const trafficLightEl = document.querySelector('#trafficLight');
const trafficLightE2 = document.querySelector('#trafficLight2');
const trafficLightE3 = document.querySelector('#trafficLight3');


function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', () => {
        trafficLightEl.style.background = ('');
        trafficLightEl.addEventListener('click', () => {
            trafficLightE3.style.background = ('red');
            trafficLightE2.style.background = ('')
        })   
    })
}

function makeYellow() {
    trafficLightE2.style.background = ('yellow');
    trafficLightE2.removeEventListener('click', makeYellow);
    trafficLightE2.addEventListener('click', makeRed);
    trafficLightE2.addEventListener('click', () => {
        trafficLightE2.style.background = ('');
        trafficLightE2.addEventListener('click', () => {
            trafficLightEl.style.background = ('green');
            trafficLightE3.style.background = ('');
            
        })
    })
}

function makeRed() {
    trafficLightE3.style.background = ('red');
    trafficLightE3.removeEventListener('click', makeRed);
    trafficLightE3.addEventListener('click', makeGreen);
    trafficLightE3.addEventListener('click', () => {
        trafficLightE3.style.background = ('');
        trafficLightE3.addEventListener('click', () => {
            trafficLightE2.style.background = ('yellow');
            trafficLightEl.style.background = ('');
        })
    })
}

    trafficLightEl.addEventListener('click', makeGreen);
    trafficLightE2.addEventListener('click', makeYellow);
    trafficLightE3.addEventListener('click', makeRed);







//  One TrafficLight

const trafficLightE1 = document.querySelector('#trafficLightE1');

function Green() {
    trafficLightE1.style.background = ('green');
    trafficLightE1.removeEventListener('click', Green);
    trafficLightE1.addEventListener('click', Yellow);
}
    
function Yellow() {
    trafficLightE1.style.background = ('yellow');
    trafficLightE1.removeEventListener('click', Yellow);
    trafficLightE1.addEventListener('click', Red);
}

function Red() {
    trafficLightE1.style.background = ('red');
    trafficLightE1.removeEventListener('click', Red);
    trafficLightE1.addEventListener('click', Green);
}

trafficLightE1.addEventListener('click', Green);











