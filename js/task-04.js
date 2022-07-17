// // Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.



// const button = {
//     subscibe: document.querySelectorAll("[data-action='increment']"),
//     add: document.querySelector("[data-action='decrement']"),
//     span: document.querySelector('#value')
// };

// let counterValue = 0;
// const increment = () => {
//     counterValue += 1;

//     button.span.textContent = counterValue;
// };

// const decrement = () => {
//     counterValue -= 1;

//     button.span.textContent = counterValue;
// };

// button.subscribe.addEventListener("click", increment);
// button.add.addEventListener("click", decrement);


let valueEl = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');

const dekrBtn = document.querySelector('#counter').firstElementChild;
const inkrBtn = document.querySelector('#counter').lastElementChild;

inkrBtn.addEventListener('click', event => {
 
  valueEl += 1;
  counterValue.innerText = valueEl;
});

dekrBtn.addEventListener('click', event => {
 
  valueEl -= 1;
  counterValue.innerText = valueEl;

});