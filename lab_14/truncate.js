const truncate = (str, maxLength) => {
    if (str.length > maxLength) {
        return str.slice(0, maxLength - 1) + "…";
    }
    return str;
}

const maxLength = 1890;
const bookTodayText = document.querySelector(".book-today-text");
window.onload = () => {
    bookTodayText.textContent = truncate(bookTodayText.textContent, maxLength);
}