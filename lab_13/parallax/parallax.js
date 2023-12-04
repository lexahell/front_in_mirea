let headerBg = document.querySelector("#bg");

window.addEventListener('scroll', function(){
    headerBg.style.opacity = 1 - +window.scrollY/550+"";
    headerBg.style.top = window.screenY +'px';
    headerBg.style.backgroundPositionY = - +window.scrollY+"px"
});