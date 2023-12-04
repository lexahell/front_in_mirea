function centerElement(event) {
    var windowWidth = window.innerWidth;
    var windowtHeight = window.innerHeight;
    var clickX = event.clientX;
    var clickY = event.clientY;
    alert("x = " + clickX + "px " +"у = " + clickY + "px");
}
const container = document.querySelector(".container-center");
const windowWidth = window.innerWidth;
const containerWidth = container.clientWidth;
const element = document.querySelector(".img-center");
container.addEventListener('click', centerElement);
container.style.position = "relative";
container.style.left =`${(windowWidth / 2 - container.clientWidth/2)}px`;
element.style.position = "relative";
element.style.left = (containerWidth / 2 - element.clientWidth/2) + "px";