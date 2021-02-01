var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var min = 0;
var max = 255;
css.textContent = body.style.background + ",";
var randomButton = document.querySelector(".myButton");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ",";
}

function randomize() {
    return randomColor = '#'+ ('000000' + (Math.random()*0xFFFFFF<<0).toString(16)).slice(-6);
}

function setRandomColor() {
    color1.value = randomize();
    color2.value = randomize();
    setGradient();
}

setRandomColor()


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", setRandomColor);