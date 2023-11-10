document.addEventListener("DOMContentLoaded", function () {

    console.log(document.getElementById("titulo").textContent + " -> get via getElementById");

    console.log(document.getElementsByClassName("parrafo")[0].textContent + " -> get via getElementsByClassName");

    console.log(document.getElementsByClassName("parrafo")[1].textContent + " -> get via getElementsByClassName");

    console.log(document.getElementsByName("nombre")[0].placeholder + " -> get via getElementsByName");

    console.log(document.getElementsByName("apellido")[0].placeholder + " -> get via getElementsByName");

    console.log(document.getElementsByTagName("li")[0].textContent + " -> get via getElementsByTagName");

    console.log(document.getElementsByTagName("li")[1].textContent + " -> get via getElementsByTagName");

    console.log(document.getElementsByTagName("li")[2].textContent + " -> get via getElementsByTagName");

    console.log(document.querySelector("h1").textContent + " -> get via querySelector");

    document.querySelectorAll("p").forEach(function (parrafo) {
        console.log(parrafo.textContent + " -> get via querySelectorAll");
    });
    
});