const GalleyImgBlock = document.querySelector(".gallery-img-block");
const BigImg = document.querySelector(".big-img img");
const SmallImgs = document.querySelector('.small-imgs');
SmallImgs.addEventListener('click', function (event) {
    let targetElement = event.target;
    if (targetElement !== this && targetElement){
        BigImg.style.opacity = "0";
        BigImg.src =    targetElement.src;
        let i = 0;
        let interval = setInterval(()=>{
            if (i >= 1){
                clearInterval(interval);
                return;
            }
            i += 0.1;
            BigImg.style.opacity = `${i}`;

        }, 100)
    }
});