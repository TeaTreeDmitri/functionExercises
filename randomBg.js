"use strict"

document.addEventListener("DOMContentLoaded", init);

// function init() {
//     randomBackground();

// }

// function randomBackground() {
//     let rndCol1 = randomColour();
//     document.body.style.backgroundColor = cssString(rndCol1);
// }

// function randomColour() {
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     return {r, g, b};
// }

// function cssString(rndCol2) {
//     return `rgb(${rndCol2.r}, ${rndCol2.g}, ${rndCol2.b} )`;
// }

/////////////////////////////////////////////////////////////////////////////////////
// ALternative with out arguments

function init() {
    randomBackground();
    randomColour()
}

function randomBackground() {
    document.body.style.backgroundColor = cssString();
}

function randomColour() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return {r, g, b};
}

function cssString() {
    return `rgb(${randomColour().r}, ${randomColour().g}, ${randomColour().b} )`;
}
