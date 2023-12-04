const likeButtons = document.querySelectorAll('.like');
likeButtons.forEach(button =>{
    let isLiked = false;
    button.addEventListener('click', () =>{
        if (!isLiked){
            isLiked = true;
            button.style.backgroundColor = "rgba(240, 39, 60, 1)";
            button.classList.remove('fa-heart-o')
            button.classList.add('fa-heart');
        } else{
            button.classList.remove('fa-heart')
            button.classList.add('fa-heart-o');
            isLiked = false;
            button.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
    });
});


// задание 4
const heartsContainer = document.querySelector('.hearts-container');

let isEmittingHearts = false;

likeButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        if (!isEmittingHearts) {
            isEmittingHearts = true;
            heartsContainer.innerHTML = '';
            document.addEventListener('mousemove', createHeart);
        } else {
            isEmittingHearts = false;
            heartsContainer.innerHTML = '';
            document.removeEventListener('mousemove', createHeart);
        }    
    });
});

    

function createHeart(event) {
    const heart = document.createElement('div');
    heart.classList.add('fa');
    heart.classList.add('fa-heart');
    heart.classList.add('heart');
    heart.style.top = `${event.clientY}px`;
    heart.style.left = `${event.clientX}px`;
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
}
