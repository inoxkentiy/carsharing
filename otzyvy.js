let username = document.querySelector("#username")
let usertext = document.querySelector("#usertext")
let button = document.querySelector("#buttsn")
button.addEventListener('click', function () {
    let newname = username.value
    let newotzyv = usertext.value
    listDiv = $("#blockss")
    listDiv.append(` <div id="otzyv">
    <h3>${newname}</h3>
    <p>${newotzyv}</p>
</div> `)
})