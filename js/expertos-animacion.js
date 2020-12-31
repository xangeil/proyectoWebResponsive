document.getElementById('artefactos-expertos1').addEventListener('click', icon_pc);
document.getElementById('artefactos-expertos2').addEventListener('click', icon_laptop);
document.getElementById('artefactos-expertos3').addEventListener('click', icon_movil);
document.getElementById('artefactos-expertos4').addEventListener('click', icon_tablet);
let estilo_pc = document.querySelector("#contenedor-expertos01");
let estilo_laptop = document.querySelector("#contenedor-expertos02");
let estilo_movil = document.querySelector("#contenedor-expertos03");
let estilo_tablet = document.querySelector("#contenedor-expertos04");

function icon_pc() {
    estilo_pc.style.opacity = "1";
    estilo_laptop.style.opacity = "0";
    estilo_movil.style.opacity = "0";
    estilo_tablet.style.opacity = "0";

}

function icon_laptop() {
    estilo_pc.style.opacity = "0";
    estilo_laptop.style.opacity = "1";
    estilo_movil.style.opacity = "0";
    estilo_tablet.style.opacity = "0";

}

function icon_movil() {
    estilo_pc.style.opacity = "0";
    estilo_laptop.style.opacity = "0";
    estilo_movil.style.opacity = "1";
    estilo_tablet.style.opacity = "0";

}

function icon_tablet() {
    estilo_pc.style.opacity = "0";
    estilo_laptop.style.opacity = "0";
    estilo_movil.style.opacity = "0";
    estilo_tablet.style.opacity = "1";

}