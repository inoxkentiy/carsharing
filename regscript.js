let btn = document.querySelector("#btn");
let contacts = document.querySelector("#contacts");
let stocks = document.querySelector("#stocks");

btn.addEventListener('click', function (st) {
    let email = document.querySelector("#emailInput").value;
    let password = document.querySelector("#passwordInput").value;
    localStorage.setItem("name", (email));
    localStorage.setItem("password", (password));
    if (email === "") {
        alert("Вы не ввели логин,ошибка")
    }
    window.location.href = 'mainpage.html';
});
contacts.addEventListener('click', function () {
    alert("Здравствуйте,при возникновении каких-либо вопросов или предложений,пожалуйста,свяжитесь с нами по телефону: 88005553535")
});

stocks.addEventListener('click', function () {
    alert("Извините,но на данный момент никаких акционных предложений нет.")
});