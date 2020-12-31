const username = document.getElementById("username");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e => {
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexUsername = /^[a-zA-Z0-9\_\-]{4,16}/;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    parrafo.innerHTML = "";
    if (!regexUsername.test(username.value)) {
        warnings += `El usuario no es valido <br>`
        entrar = true;
    }
    if (!regexEmail.test(email.value)) {
        warnings += `El email no es valido <br>`
        entrar = true;
    }
    if (pass.value.length < 8) {
        warnings += `La contraseña no es valida <br>`
        entrar = true;
    }

    if (entrar) {
        parrafo.innerHTML = warnings;
        setTimeout(() => {
            warnings = "";
            parrafo.innerHTML = warnings;
        }, 2000)
    } else {
        Swal.fire({
            title: 'Gracias Por Registrarte',
            icon: 'success',
            timer: '3000',
            showConfirmButton: false
        })
        form.reset();
    }
});