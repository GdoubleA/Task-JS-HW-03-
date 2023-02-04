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


























// function makeGreen() {
//     trafficLightEl.style.background = ('green');
//     trafficLightEl.removeEventListener('click', makeGreen);
//     trafficLightEl.addEventListener('click', makeYellow);

//     trafficLightEl.addEventListener('click', makeRed);
// }
    



// function makeYellow() {
//     trafficLightE2.style.background = ('yellow');
//     trafficLightE2.removeEventListener('click', makeYellow);
//     trafficLightE2.addEventListener('click', makeRed);
// }


// function makeRed() {
//     trafficLightE3.style.background = ('red');
//     trafficLightE3.removeEventListener('click', makeRed);
//     trafficLightE3.addEventListener('click', makeGreen);
// }

// trafficLightEl.addEventListener('click', makeGreen);
// trafficLightE2.addEventListener('click', makeYellow);
// trafficLightE3.addEventListener('click', makeRed);










