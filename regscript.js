let btn = document.querySelector("#btn");
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