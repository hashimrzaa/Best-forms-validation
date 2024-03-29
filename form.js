const btn = document.querySelector('button')
let show = document.querySelector('.inp span')
let erornam = document.getElementById('nameError')
let eroremail = document.getElementById('emailError')
let erorpass = document.getElementById('passwordError')
let name = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let img = document.querySelector('img')
if (window.location.reload) {
    name.focus()
}
function Validation() {

    if (name.value === "") {
        erornam.innerText = "Name is required";
        name.focus()
        return
    }
    if (name.value !== "") {
        erornam.innerText = ""
    }
    if (email.value === "") {
        eroremail.innerText = "Email is required";
        email.focus()
        return
    }
    if (email.value !== "") {
        eroremail.innerText = "";
    }

    if (email.value.includes('@') === false) {
        eroremail.innerText = "@ is required in email";
        email.focus()
        return
    }
    if (email.value.includes('@') !== false) {
        eroremail.innerText = "";

    }
    if (email.value.includes('.') === false) {
        eroremail.innerText = ". is required in email";
        email.focus()
        return
    }
    if (email.value.includes('.') !== false) {
        eroremail.innerText = "";

    }
    if (email.value.indexOf(' ') !== -1) {
        eroremail.innerText = "space is not allowed";
        email.focus()
        return
    }
    if (email.value.indexOf(' ') === -1) {
        eroremail.innerText = "";
    }
    if (password.value === "") {
        erorpass.innerText = "Password is required";
        password.focus()
        return
    }
    if (password.value !== "") {
        erorpass.innerText = "";

    }

    if (password.value.length < 6) {
        erorpass.innerText = "6 digits password required";
        password.focus()
        return
    }
    if (password.value.length > 6) {
        erorpass.innerText = "";
    }


    if (erornam.value === undefined && eroremail.value === undefined && erorpass.value === undefined) {
        const div = document.createElement("div")
        div.innerText = 'success'
        div.classList.add('create')
        const a = document.body.appendChild(div)
        document.querySelector('form').style.display = "none"
    }
}
btn.addEventListener('click', Validation)


document.addEventListener('keydown', function (event) {
    const key = event.key
    if (key === "Enter") {
        Validation()
    }
})

password.addEventListener('input', function () {
    if (password.value.length === 0) {
        img.classList.add('hide')
    } else {
        img.classList.remove('hide')
    }
})

show.addEventListener('click', function () {
    if (password.type === "password") {
        img.src = "show.png"
        password.type = "text"
    } else { 
        password.type = "password"
        img.src = "hide.png"
    }
    show.addEventListener('mouseleave', function () {
        password.type = "password"
        img.src = "hide.png"
    })
})

document.addEventListener('keydown', function (event) {
    const key = event.key
    if (key === 'Shift') {
        password.type = "text"
        img.src = "show.png"
    }
    document.addEventListener('keyup', function (event) {
        const key = event.key
        if (key === 'Shift') {
            password.type = "password"
            img.src = "hide.png"
        }
    })
})