for (let registration; registration!="Да" && registration!="да"; ){
    registration = prompt("Желаете пройти регистрацию на сайте? (Да/Нет)")
    if (registration == "Да" || registration == "да") {
        alert("Круто!");
        break;
    } else {
        alert("Попробуй ещё раз");
    }
}