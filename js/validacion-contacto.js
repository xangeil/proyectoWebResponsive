const nombre_contacto = document.getElementById("nombre-contacto");
const celular_contacto = document.getElementById("celular-contacto");
const email_contacto = document.getElementById("email-contacto");
const mensaje_contacto = document.getElementById("mensaje-contacto");
const checkbox = document.getElementById('exampleCheck1');
const form_contacto = document.getElementById("form-contacto");

form_contacto.addEventListener('submit', e => {
    e.preventDefault();
    let regexNombre = /^[A-Za-z\s]{7,50}$/
    let regexCelular = /^\d{9}$/
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

    if (!regexNombre.test(nombre_contacto.value)) {
        Swal.fire({
            title: 'El nombre no es valido',
            icon: 'info',
            timer: '3000',
            showConfirmButton: false
        })
    } else if (!regexCelular.test(celular_contacto.value)) {
        Swal.fire({
            title: 'El numero celular no es valido',
            icon: 'info',
            timer: '3000',
            showConfirmButton: false
        })
    } else if (!regexEmail.test(email_contacto.value)) {
        Swal.fire({
            title: 'Debes poner un correo',
            icon: 'info',
            timer: '3000',
            showConfirmButton: false
        })
    } else if (mensaje_contacto.value.length < 5) {
        Swal.fire({
            title: 'Especifica mejor el mensaje',
            icon: 'info',
            timer: '3000',
            showConfirmButton: false
        })
    } else if (!checkbox.checked) {
        Swal.fire({
            title: 'Debes aceptar los terminos y condiciones',
            icon: 'info',
            timer: '3000',
            showConfirmButton: false
        })
    } else {
        Swal.fire({
            title: 'Mensaje enviado',
            icon: 'success',
            timer: '3000',
            showConfirmButton: false
        })
        form_contacto.reset();
    }
})