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
