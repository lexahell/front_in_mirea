const animatedList = document.querySelector('.target-list');
animatedList.addEventListener('click', function (event) {
    const clickedItem = event.target;
    animateBounce(clickedItem, () => {
        animateReverseMove(clickedItem);
    });
});

function animateBounce(element, onComplete) {
    let start = performance.now();

    function animate(time) {
        let timeFraction = (time - start) / 1000;
        if (timeFraction > 1) timeFraction = 1;

        let progress = bounce(timeFraction);
        element.style.position = "relative";
        element.style.left = progress * 100 + 'px';

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        } else {
            onComplete();
        }
    }

    requestAnimationFrame(animate);
}

function animateReverseMove(element) {
    let start = performance.now();
    let initialLeft = parseInt(element.style.left) || 0;

    function animate(time) {
        let timeFraction = (time - start) / 1000;
        if (timeFraction > 1) timeFraction = 1;

        let progress = 1 - Math.pow(1 - timeFraction, 5);
        element.style.left = initialLeft - progress * 100 + 'px';

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

// Функция анимации Bounce
function bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
        }
    }
}