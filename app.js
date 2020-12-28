const container = document.querySelector("#container");
const image = document.querySelectorAll("#container img");

const buttonNext = document.getElementById("next");
const buttonPrevious = document.getElementById("previous");

let index = 1;
let size = image[0].clientWidth;

container.style.transform = "translateX(" + (-size * index) + "px)";

buttonNext.addEventListener("click", ()=> {

    container.style.transition = "transform 0.4s ease-in-out";
    index++;
    container.style.transform = "translateX(" + (-size * index) + "px)";
});

buttonPrevious.addEventListener("click", ()=> {
    container.style.transition = "transform 0.4s ease-in-out";
    index--;
    container.style.transform = "translateX(" + (-size * index) + "px)";
});

container.addEventListener("transitionend", ()=> {
    if (image[index].id === "lastImage") {
        container.style.transition = "none";
        index = image.length - 2;
        container.style.transform = "translateX(" + (-size * index) + "px)";
    }
    if (image[index].id === "firstImage") {
        container.style.transition = "none";
        index = image.length - index;
        container.style.transform = "translateX(" + (-size * index) + "px)";
    }
});