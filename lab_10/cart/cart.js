function Accumulator(startingValue) {
    this.value = startingValue ?? 0;
    this.read =  function () {
        const newValue = +prompt("Введите сумму товара", '0');
        this.value += newValue;
    }
}
let accumulator;
window.onload = () => {
    accumulator = new Accumulator(0);
}
const shoppingBasket = document.querySelector('.add-to-cart');
const total = document.querySelector('.total');
shoppingBasket.addEventListener('click', () => {
    accumulator.read();
    total.innerHTML = `Текущая сумма товаров: ${accumulator.value}`;
})