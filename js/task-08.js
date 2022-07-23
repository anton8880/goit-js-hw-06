// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.


const form = document.querySelector('.login-form');

form.addEventListener('submit', onLoginForm);

function onLoginForm(event) {
    event.preventDefault();

    const formEl = event.currentTargen.elements;
    const mail = formEl.mail.value;
    const password = formEl.password.value;

    const formData = {
        mail: mail,
        password: password,
    }
    console.log(formData)
    form.reset();

    if (email === '' || password === '') {
        alert('Все поля должны быть заполнены');
        form.reset();
        return;
    }
}