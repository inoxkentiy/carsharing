let hey = document.querySelector("#welcome");
let login = (localStorage.getItem("name"));
let password = (localStorage.getItem("password"));

for (let i = 0; i < 1; i++) {
    hey.append(`Добро пожаловать,${login}.
    Можете приступать к выбору автомобиля.`);
}

function app() {
    let buttons = document.querySelectorAll('.buttn')
    let cards = document.querySelectorAll('.containersec')

    function filter(category, items) {
        items.forEach((item) => {
            let isItemFiltered = !item.classList.contains(category)
            let isShowAll = category.toLowerCase() === 'all'
            if (isItemFiltered && !isShowAll) {
                item.classList.add('anime')
            } else {
                item.classList.remove('hide')
                item.classList.remove('anime')
            }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let currentCategory = button.dataset.filter
            filter(currentCategory, cards)
        })
    })

    cards.forEach((card) => {
        card.ontransitionend = function () {
            if (card.classList.contains('anime')) {
                card.classList.add('hide')
            }
        }
    })
}

app()


let divInfo = document.querySelectorAll("#containersec")
console.log(divInfo)

let ulList = document.querySelectorAll(".info")
console.log(ulList)

let buttons = document.querySelectorAll(".add")
console.log(buttons)





function addToCart(name, price) {
    let car = {
        name: name,
        price: price
    };

    let cartArray = JSON.parse(localStorage.getItem("cartArray"))
    if (cartArray === null) {
        cartArray = [];
    }

    cartArray.push(car);
    localStorage.setItem("cartArray", JSON.stringify(cartArray));
    console.log(cartArray)
}