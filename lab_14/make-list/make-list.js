const btnAddLi = document.querySelector(".btn-add-li");
const targetList = document.querySelector(".target-list");


function showNotification(text){
const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.textContent = text;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 1500);
}

btnAddLi.addEventListener('click', () => {
    const userInput = prompt('Введите содержимое пункта списка:');
    if (!userInput) {
        showNotification("Вы ввели пустую строку или отменили действие");
        return;
    }
    const listItem = document.createElement('li');
    targetList.appendChild(listItem);
    listItem.textContent = userInput;


    const text = userInput;
    const textContainer = listItem;
    
    let index = 0;
    let animationFrame;
    
    function animateText() {
      textContainer.textContent = text.substring(0, index);
      index++;
    
      if (index <= text.length) {
        animationFrame = requestAnimationFrame(() => {
          setTimeout(animateText, 150); // Задержка 100 миллисекунд (0.1 секунда)
        });
      }
    }
    // Запустить анимацию набора текста
    animationFrame = requestAnimationFrame(animateText);
});


