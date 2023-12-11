const dragItems = document.querySelectorAll('.cart-item');
const dropZones = document.querySelectorAll('.area-for-products');
console.log(dragItems, dropZones);

dragItems.forEach(dragItem =>{
    dragItem.addEventListener('dragstart', handlerDragstart);
    // dragItem.addEventListener('dragend', handlerDragend);
    // dragItem.addEventListener('drag', handlerDrag);

    function handlerDragstart (event){
        event.dataTransfer.setData("dragItem", this.id);
    }
    // function handlerDragend  (event){ 

    // }
    // function handlerDrag (event){ 

    // }
}); 
function renderCart(){
    let sum = 0;
    const total = document.querySelector('.total');
    const itemsInCart = document.querySelectorAll('.cart-submit-container .cart-item');
    console.log(itemsInCart);
    itemsInCart.forEach(item =>{
        const price = item.dataset.price;
        sum += +price;
    });
    total.textContent = "Итого: " + sum + " руб";
}

dropZones.forEach(dropZone =>{
    dropZone.addEventListener('dragenter', handlerDragenter);
    dropZone.addEventListener('dragleave', handlerDragleave);
    dropZone.addEventListener('dragover', handlerDragover);
    dropZone.addEventListener('drop', handlerDragdrop);

    function handlerDragenter(event){
        event.preventDefault();
        this.classList.add('active'); 
    }
    function handlerDragleave(event){
        this.classList.remove('active'); 
    }
    function handlerDragover(event){
        event.preventDefault();
    }
    function handlerDragdrop(event){
        const dragFlag = event.dataTransfer.getData('dragItem');
        const dragItem = document.querySelector(`#${dragFlag}`)
        this.append(dragItem);
        renderCart();
    }
});
renderCart()