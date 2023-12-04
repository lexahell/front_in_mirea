const generateRandomNumber = max => {
    return Math.floor(Math.random() * max);
}
const isEmpty = (obj) => {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

const generateRandomLetters = length => {
    let result = "";
    const dictionary = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < length; i++) {
        result += dictionary.charAt(generateRandomNumber(dictionary.length));
    }
    return result;
}

const generateRandomSum = () => {
    const num1 = generateRandomNumber(10);
    const num2 = generateRandomNumber(10);
    const question = `Сколько будет ${num1} + ${num2}?`;
    return { question, answer: num1 + num2 };
}
window.onload = () =>  {
    const randomLetters = document.querySelector('.task span');
    randomLetters.textContent = generateRandomLetters(6);
}
let randomSumAnswer;
let totalWrongAnswers = 0;
const captchaInput = document.querySelector('#captchaInput');
const task = document.querySelector('.task span');
const captchaLabel = document.querySelector('.captcha label');

const checkCaptcha = () => {
    if(!totalWrongAnswers) {
        if(isEmpty(captchaInput.value)) {
            alert("Вы ничего не ввели. Попробуйте еще раз.");
            return;
        }
        if(captchaInput.value !== task.textContent) {
            totalWrongAnswers++;
            const obj = generateRandomSum();
            randomSumAnswer = obj.answer;
            task.textContent = obj.question;
            captchaLabel.textContent = "Введите сумму: ";
            captchaInput.placeholder = "Введите сумму...";
            captchaInput.value = "";
        } else {
            alert("Проверка прошла успешно!");
            document.location.href = "../../lab_11/login.html";
        }
    } else {
        if(isEmpty(captchaInput.value)) {
            alert("Вы ничего не ввели. Попробуйте еще раз.");
            return;
        }
        if(+captchaInput.value !== randomSumAnswer) {
            alert("Неверный ответ! Попробуйте еще раз.");
            const obj = generateRandomSum();
            randomSumAnswer = obj.answer;
            task.textContent = obj.question;
            captchaInput.value = "";
        } else {
            alert("Проверка прошла успешно!");
            document.location.href = "../../lab_11/login.html";
        }
    }
}

const btn = document.querySelector('button');
btn.addEventListener('click', () => checkCaptcha());