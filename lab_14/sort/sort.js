function sortAscending() {
  const sortableContainer = document.getElementById("sortableContainer");
  const sortableElements = document.querySelectorAll(".rec-item");
  const sortedElements = Array.from(sortableElements).sort((a, b) => {
    let aPrice = parseInt(a.textContent.split("\n")[3]);
    let bPrice = parseInt(b.textContent.split("\n")[3]);
    return aPrice - bPrice;
  });
    sortedElements.forEach((element) => {
    sortableContainer.appendChild(element);
  });
}

function sortDescending() {
  const sortableContainer = document.getElementById("sortableContainer");
  const sortableElements = document.querySelectorAll(".rec-item");
  const sortedElements = Array.from(sortableElements).sort((a, b) => {
    let aPrice = parseInt(a.textContent.split("\n")[3]);
    let bPrice = parseInt(b.textContent.split("\n")[3]);
    return bPrice - aPrice;
  });
    sortedElements.forEach((element) => {
    sortableContainer.appendChild(element);
  });
} 
