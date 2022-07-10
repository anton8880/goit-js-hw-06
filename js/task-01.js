const allItems = document.querySelectorAll('li.item');
const allItemsLng = allItems.length;

console.log(`Number of categories: ${allItemsLng}`); 


allItems.forEach((element) => {
    const elementTitle = document.querySelector('h2').textContent;

    const allLi = document.querySelectorAll('li');
    const allLiLng = allLi.length;

    console.log(elementTitle);
    console.log(allLiLng);
});

