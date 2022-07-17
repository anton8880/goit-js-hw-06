// const allItems = document.querySelectorAll('li.item');
// const allItemsLng = allItems.length;

// console.log(`Number of categories: ${allItemsLng}`); 


// allItems.forEach((element) => {
//     const elementTitle = document.querySelector('h2').textContent;

//     const allLi = document.querySelectorAll('li');
//     const allLiLng = allLi.length;

//     console.log(`Category: ${elementTitle}`);
//     console.log(`Elements: ${allLiLng}`);
// });


const allItems = document.querySelectorAll('li.item');

console.log(`Number of categories: ${allItems.length}`);

const allItemsLng = document.querySelectorAll('#categories>li');
allItemsLng.forEach(el => {

  console.log(
    `Category: ${el.firstElementChild.textContent}, Elements: ${el.lastElementChild.children.length}`,
  );
});

