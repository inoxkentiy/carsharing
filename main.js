let hey = document.querySelector("#welcome");
let login = (localStorage.getItem("name"));
let password = (localStorage.getItem("password"));

for (let i = 0; i < 1; i++) {
    hey.append(`Добро пожаловать,${login}`);
}
