const ALERTA = "This is an alert message, click me to move on.";
const CONFIRM = "Show me in an alert if you clicked on ok or false";
const ACEPTAR = "You clicked on true click me to move on!!!";
const CANCELAR = "You clicked on false click me to move on!!!";
const PROMPT = "Show me in an alert the message typed";

alert(ALERTA);
var respuesta = confirm(CONFIRM);

if(respuesta === true){
    alert(ACEPTAR);
} else {
    alert(CANCELAR);
}

var entrada = prompt(PROMPT);

if(entrada !== null){
    alert("You typed '" + entrada + "'. Click me to move on!!!");
}