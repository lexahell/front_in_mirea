const contents = document.querySelector("#contents");
contents.addEventListener("click", function(event){
    let targetElement = event.target;
    while (targetElement && targetElement !== this){
        if (targetElement.tagName === "A"){
            const confirmLeave = confirm('Вы уверены, что хотите покинуть страницу?');
            if(!confirmLeave){
                event.preventDefault();
            }                
            return;
        }
        targetElement = targetElement.parentNode;
    }
});