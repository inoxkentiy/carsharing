let cart = JSON.parse(localStorage.getItem("cartArray"))

let clear = document.querySelector("#deletebtn");
console.log(cart)

listdiv = $("#list")
cart.map(item => listdiv.append(` <div class="info_block">
<p> Название машины: ${item.name}</p>
<p> Цена: ${item.price}</p>
</div>
`))

clear.addEventListener('click', function () {
    localStorage.removeItem("cartArray");
    listdiv.empty();
})
