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
    let Account = {
        name: email,
        password: password
    }

    let arrayAccount = JSON.parse(localStorage.getItem("arrayAccount"));
    if (arrayAccount === null) {
        arrayAccount = [];
    }
    arrayAccount.push(Account);
    localStorage.setItem("arrayAccount", JSON.stringify(arrayAccount));
    console.log(arrayAccount)
});

contacts.addEventListener('click', function () {
    alert("Здравствуйте,при возникновении каких-либо вопросов или предложений,пожалуйста,свяжитесь с нами по телефону: 88005553535")
});

stocks.addEventListener('click', function () {
    alert("Извините,но на данный момент никаких акционных предложений нет.")
});

// Добавление 2-й кнопки.
let buttonSecond = document.querySelector("#btnSecond")
btnSecond.addEventListener('click', function (st) {
    let emailSecond = document.querySelector("#emailInput2").value;
    let passwordSecond = document.querySelector("#passwordInput2").value;
    localStorage.setItem("name2", (emailSecond));
    localStorage.setItem("password2", (passwordSecond));
    //Если email - 0=>alert 
    if (emailSecond === "") {
        alert("Вы не ввели логин,ошибка")
        location.href = "registration.html"
    }
    if (emailSecond === localStorage.getItem("name")
        && passwordSecond === localStorage.getItem("password")
    ) {
        console.log("Вы успешно вошли")
        alert("Вы успешно вошли")
    }
    location.href = "mainpage.html"
});

let buttonDelete = document.querySelector("#delete")
buttonDelete.addEventListener('click', () => {
    localStorage.removeItem("arrayAccount");
})