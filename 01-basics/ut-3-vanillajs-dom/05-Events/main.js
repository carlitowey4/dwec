//
const miBoton = document.getElementsByClassName("btn-primary")[0];

function clickEvent() {
    alert('Click Event');
}

miBoton.addEventListener('click', clickEvent);
//
const miBoton2 = document.getElementsByClassName("btn-secondary")[0];

function mouseenterEvent() {
    alert('Mouse Enter Event');
}

miBoton2.addEventListener('mouseenter', mouseenterEvent);
//
const miBoton3 = document.getElementsByClassName("btn-success")[0];

function mouseupEvent() {
    alert('Mouse Up Event');
}

miBoton3.addEventListener('mouseup', mouseupEvent);
//
const miBoton4 = document.getElementsByClassName("btn-danger")[0];

function mouseleaveEvent() {
    alert('Mouse Leave Event');
}

miBoton4.addEventListener('mouseleave', mouseleaveEvent);
//
const miBoton5 = document.getElementsByClassName("btn-warning")[0];

function agregarClaseDanger() {
    miBoton5.classList.remove("btn-warning");
    miBoton5.classList.add("btn-danger");
}

function agregarClaseWarning() {
    miBoton5.classList.remove("btn-danger");
    miBoton5.classList.add("btn-warning");
}

miBoton5.addEventListener('mouseenter', agregarClaseDanger);
miBoton5.addEventListener('mouseleave', agregarClaseWarning);
//
const miBoton6 = document.getElementsByClassName("btn-info")[0];

function cambiarColordeFondo() {
    miBoton6.style.backgroundColor = "red";
}

miBoton6.addEventListener('click', cambiarColordeFondo);
//
const miBoton7 = document.getElementsByClassName("btn-light")[0];

function cambiarColordeFondo2() {
    miBoton7.style.backgroundColor = "white";
}

miBoton7.addEventListener('click', cambiarColordeFondo2);
//
const miBoton8 = document.getElementsByClassName("btn-dark")[0];
const botones = querySelectorAll(".btn");

miBoton8.addEventListener('click', () => {
    botones.forEach(boton => {
        boton.style.backgroundColor = "black";
        boton.style.color = "white";
    });
});