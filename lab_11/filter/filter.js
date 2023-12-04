function filterArray(arr, a, b) {
    let res = [];
    for(let i of arr){
        if(+i >= +a && +i <= +b){
            res.push(i);
        }
    }
    return res;
}

// Пример использования функции
const a = prompt("Введите нижнюю границу(a): ");
const b = prompt("Введите верхнюю границу(b): ");
const inputArray = prompt("Введите числа через пробел").split(" ");


const filteredResult = filterArray(inputArray, a, b);
alert(`Отфильтрованный массив: ${filteredResult}`);
