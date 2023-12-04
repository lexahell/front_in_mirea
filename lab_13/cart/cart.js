const cartItems = document.querySelectorAll(".cart-item");
const deleteButtons = document.querySelectorAll(".remove-cart-item")
const clearCart = document.querySelector(".clear-cart");
const render = () => {
    const cartItems = document.querySelectorAll(".cart-item");
    const deleteButtons = document.querySelectorAll(".remove-cart-item")
    const clearCart = document.querySelector(".clear-cart");
    const total = document.querySelector(".total");
    const totalCosts = document.querySelectorAll(".total-cost");
    let sum = 0;
    let temp = 0;
    totalCosts.forEach(totalCost =>{
        temp = parseInt(totalCost.textContent);
        sum += temp;
    });
    total.textContent = `Итого: ${sum} руб`;

    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Находим родительский элемент товара (item) и удаляем его из DOM
            const item = this.closest('.cart-item');
            if (item) {
                item.remove();
            }
            render();
        });
    }); 
    clearCart.addEventListener("click", function() {
        cartItems.forEach(item =>{
            item.remove();
        });
        render();
    });
};



// Получаем все элементы с классом count-container
const render_counter= ()=>{
    const countContainers = document.querySelectorAll('.count-container');

    // Для каждого контейнера добавляем обработчики событий для кнопок +/- внутри него
    countContainers.forEach(container => {
        const countDisplay = container.querySelector('.count');
        const plusButton = container.querySelector('.count-plus');
        const minusButton = container.querySelector('.count-minus');

        plusButton.addEventListener('click', function() {
            let count = parseInt(countDisplay.textContent);
            countDisplay.textContent = ++count;
            const item = this.closest('.cart-item').querySelector(".total-cost");
            item.textContent = `${parseInt(item.textContent) / (count-1) * count} руб`;
            render();
        });

        minusButton.addEventListener('click', function() {
            let count = parseInt(countDisplay.textContent);
            if (count > 0) {
                --count;
                if (count == 0){
                    const item = this.closest('.cart-item');
                    console.log(this);
                    console.log(item);
                    if (item) {
                        item.remove();
                    }
                }
                countDisplay.textContent = count;
                const item = this.closest('.cart-item').querySelector(".total-cost");
                item.textContent = `${parseInt(item.textContent) / (count+1) * count} руб`;
            }
            render();
        });
    });
};
render();
render_counter();


// добавление в корзину
const button1 = document.querySelector("#rec-1");
const button2 = document.querySelector("#rec-2");
const button3 = document.querySelector("#rec-3");

button1.addEventListener('click', ()=>{
    const productsContainer = document.querySelector('.products');

    const newCartItemHTML = `
        <div class="cart-item 1">
            <div class="title-and-image">
                <img src="../img/book-1.webp" alt="">
                <p class="title">Милосердие</p>
            </div>
            <div>
                <p class="total-cost">459 руб</p>
                <h4>Количество</h4>
                <div class="count-container">
                    <button class="count-minus">-</button>
                    <p class="count">1</p>
                    <button class="count-plus">+</button>
                </div>
            </div>
            <button class="remove-cart-item">X</button>
        </div>
    `;
    productsContainer.insertAdjacentHTML('beforeend', newCartItemHTML);
    render();
    render_counter();
});

button2.addEventListener('click', ()=>{
    const productsContainer = document.querySelector('.products');

    const newCartItemHTML = `
        <div class="cart-item 2">
        <div class="title-and-image">
            <img src="../img/book-5.jpg" alt="">
            <p class="title">Последний гамбит</p>
        </div>
        <div>
            <p class="total-cost">413 руб</p>
            <h4>Количество</h4>
            <div class="count-container">
                <button class="count-minus">-</button>
                <p class="count">1</p>
                <button class="count-plus">+</button>
            </div>
        </div>
        <button class="remove-cart-item">X</button>
        </div>
    `;
    productsContainer.insertAdjacentHTML('beforeend', newCartItemHTML);
    render();
    render_counter();
});

button3.addEventListener('click', ()=>{
    const productsContainer = document.querySelector('.products');

    const newCartItemHTML = `
    <div class="cart-item 3">
    <div class="title-and-image">
        <img src="../img/book-6.jpg" alt="">
        <p class="title">Аид</p>
    </div>
    <div>
        <p class="total-cost">800 руб</p>
        <h4>Количество</h4>
        <div class="count-container">
            <button class="count-minus">-</button>
            <p class="count">1</p>
            <button class="count-plus">+</button>
        </div>
    </div>
    <button class="remove-cart-item">X</button>
    </div>
    `;
    productsContainer.insertAdjacentHTML('beforeend', newCartItemHTML);
    render();
    render_counter();
});