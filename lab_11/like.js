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

