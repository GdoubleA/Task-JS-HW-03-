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

const trafLightRed = document.querySelector('#lightRed');
const trafLightYellow = document.querySelector('#lightYellow');
const trafLightGreen = document.querySelector('#lightGreen');


trafLightRed.addEventListener('click', makeRed);
function makeRed() {
    trafLightRed.style.background = ('red');
    trafLightYellow.style.background = ('#0000004d');
    trafLightGreen.style.background = ('#0000004d');

    // Listener remove
    trafLightRed.removeEventListener('click', makeRed);
    trafLightYellow.removeEventListener('click', makeRed);
    trafLightGreen.removeEventListener('click', makeRed);

    // Listener set
    trafLightRed.addEventListener('click', makeYellow);
    trafLightYellow.addEventListener('click', makeYellow);
    trafLightGreen.addEventListener('click', makeYellow);   
}

trafLightYellow.addEventListener('click', makeRed);
function makeYellow() {
   
    trafLightYellow.style.background = ('yellow');
    trafLightRed.style.background = ('#0000004d');
    trafLightGreen.style.background = ('#0000004d');

    // Listener remove
    trafLightRed.removeEventListener('click', makeYellow);
    trafLightYellow.removeEventListener('click', makeYellow);
    trafLightGreen.removeEventListener('click', makeYellow);

    // Listener set
    trafLightRed.addEventListener('click', makeGreen);
    trafLightYellow.addEventListener('click', makeGreen);
    trafLightGreen.addEventListener('click', makeGreen);
}

trafLightGreen.addEventListener('click', makeRed);
function makeGreen() {
    trafLightGreen.style.background = ('green');
    trafLightRed.style.background = ('#0000004d');
    trafLightYellow.style.background = ('#0000004d');

    // Listener remove
    trafLightRed.removeEventListener('click', makeGreen);
    trafLightYellow.removeEventListener('click', makeGreen);
    trafLightGreen.removeEventListener('click', makeGreen);

    // Listener set

    trafLightYellow.addEventListener('click', makeRed);
    trafLightRed.addEventListener('click', makeRed);
    trafLightGreen.addEventListener('click', makeRed);
}



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











