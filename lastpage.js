let cart = JSON.parse(localStorage.getItem("cartArray"))

let clear = document.querySelector("#deletebtn");

let ofor = document.querySelector("#oforbtn");
let contacts = document.querySelector("#contacts");
let stocks = document.querySelector("#stocks");
contacts.addEventListener('click', function () {
    alert("Здравствуйте,при возникновении каких-либо вопросов или предложений,пожалуйста,свяжитесь с нами по телефону: 88005553535")
});

stocks.addEventListener('click', function () {
    alert("Извините,но на данный момент никаких акционных предложений нет.")
});
let sum = 0;
console.log(cart)

listdiv = $("#list")
cart.map(item =>
    listdiv.append(` <div class="info_block">
<p> Название машины: ${item.name}</p>
<p> Цена: ${item.price} KZT/час</p>
</div>
` ))

for (let i = 0; i < cart.length; i++) {
    sum += cart[i].price
}
clear.addEventListener('click', function () {
    localStorage.removeItem("cartArray");
    listdiv.empty();
})
ofor.addEventListener('click', function () {
    alert(`Вы должны оплатить ${sum}.
    Как будете платить?
    Картой или наличными?`)
})

listok = $("#listok")
listok.append(
    `<div class="info_block">
        <h4>Вы должны оплатить <p id="red"> ${sum} KZT</p>
    Как будете платить?</h4>
    <p><a target="blank" href="https://kaspi.kz/shop/?utm_source=google&utm_medium=cpc&utm_campaign=Shop_Search_KASPI_BRAND&gclid=CjwKCAjwiY6MBhBqEiwARFSCPvIvoduZd0yg2N6no_48cPDqnOf6wQpel8g0OjCB9Rqgx9TRFLP_bhoCU_AQAvD_BwE&at=1"
                        id="service">Картой</a> или  <a target="blank" href="https://kaspi.kz/guide/ru/cash_credit/receive/"
                        id="service">наличными</a>? </p></div >`

)
