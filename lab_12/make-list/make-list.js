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
    listItem.textContent = userInput;
    targetList.appendChild(listItem);
});