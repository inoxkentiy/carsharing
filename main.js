let hey = document.querySelector("#welcome");
let login = (localStorage.getItem("name"));
let password = (localStorage.getItem("password"));

for (let i = 0; i < 1; i++) {
    hey.append(`Добро пожаловать,${login}.
    Можете приступать к выбору автомобиля.`);
}

function app() {
    const buttons = document.querySelectorAll('.buttn')
    const cards = document.querySelectorAll('.containersec')

    function filter(category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category)
            const isShowAll = category.toLowerCase() === 'all'
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
            const currentCategory = button.dataset.filter
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
