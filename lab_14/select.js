document.addEventListener('DOMContentLoaded', function(){
    const highLightContainer = document.querySelector(".highlight-container");
    const highLightList = document.querySelector(".highlight-list");
    const listItems = document.querySelectorAll(".highlight-list li");
    highLightList.addEventListener('click', function(event){
        const targetElement = event.target;
        if (event.ctrlKey || event.metaKey){
            targetElement.classList.add('selected');
        }else {
          for (const listItem of listItems) {
              listItem.classList.remove('selected');
            }
          targetElement.classList.add('selected');
        }
        event.preventDefault();
    });
    highLightList.addEventListener('mousedown', function(event){
        event.preventDefault();
    });
});
document.addEventListener('click', function(event) {
    const listItems = document.querySelectorAll(".highlight-list li");
    if (!event.target.closest('.highlight-list')) {
      for (const listItem of listItems) {
        listItem.classList.remove('selected');
      }
    }
  });