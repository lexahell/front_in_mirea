const bookNotifications = [
  "Новинка! 'Мастер и Маргарита'теперь в наличии!",
  "Классические произведения Льва Толстого со скидкой до 30%!",
  "Летняя акция: Купите две книги по цене одной!",
  "Новая партия бестселлеров ждет вас!",
  "Специально для любителей фантастики!",
  "Уникальные издания для детей: цветные иллюстрации и захватывающие сюжеты ждут маленьких читателей!",
  "Продолжение любимых серий! Новые книги из серии 'Гарри Поттер' и 'Хроники Нарнии' уже в продаже.",
  "Специальный раздел 'Лучшие книги 2023 года': выбирайте из топовых произведений современных авторов.",
  "Книги по саморазвитию и личностному росту: инструменты для развития в себе лидера и профессионала.",
  "Познавательные книги по истории, науке и культуре разных народов мира – узнавайте что-то новое каждый день!",
];

const containerNotification = document.querySelector(".notifications-content");
function addNotification() {
  const newNotification = document.createElement("a");
  const randomIndex = Math.floor(Math.random() * bookNotifications.length);
  const notificationCount = document.querySelector(".circle-count-notif");
  const currentCount = parseInt(notificationCount.textContent);
  newNotification.textContent = bookNotifications[randomIndex];
  const btn = document.createElement("button");
  btn.classList.add("delete-notif")
  btn.textContent = "x"
  newNotification.appendChild(btn);
  containerNotification.appendChild(newNotification);
  notificationCount.style.display = "block";
  notificationCount.textContent = currentCount + 1;
}
let notificationInterval;
function startNotificationInterval(){
    notificationInterval = setInterval(addNotification, 3000);
}
function stopNotificationInterval() {
    clearInterval(notificationInterval);
}

function startIntervalWithDelay(callback, delayTime) {
    setTimeout(callback, delayTime);
}


const dropBtn = document.querySelector('.dropbtn')
dropBtn.addEventListener('click', ()=>{
    stopNotificationInterval();
    startIntervalWithDelay(startNotificationInterval,10000)
})  
startNotificationInterval();



containerNotification.addEventListener('click', (event)=>{
  if(event.target.classList.contains("delete-notif")){
    event.target.parentElement.remove();
    containerNotification.nextElementSibling.textContent = +containerNotification.nextElementSibling.textContent - 1;
    if(containerNotification.nextElementSibling.textContent == "0"){
      containerNotification.nextElementSibling.style.display = "none";
    }
  }
});