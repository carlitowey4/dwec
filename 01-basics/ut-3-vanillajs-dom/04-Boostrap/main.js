document.addEventListener("DOMContentLoaded", function () {

const body = document.body;
body.classList.add('p-3', 'm-0', 'border-0', 'bd-example');

const div = document.createElement('div');
div.classList.add('list-group');

// Creo una lista con los textos y clases de cada <a>, recogiendo las clases en otra lista.
const items = [
    { text: 'A simple default list group item', classes: ['list-group-item', 'list-group-item-action'] },
    { text: 'A simple primary list group item', classes: ['list-group-item', 'list-group-item-action', 'list-group-item-primary'] },
    { text: 'A simple secondary list group item', classes: ['list-group-item', 'list-group-item-action', 'list-group-item-secondary'] },
    { text: 'A simple success list group item', classes: ['list-group-item', 'list-group-item-action', 'list-group-item-success'] },
    { text: 'A simple danger list group item', classes: ['list-group-item', 'list-group-item-action', 'list-group-item-danger'] },
    { text: 'A simple warning list group item', classes: ['list-group-item', 'list-group-item-action', 'list-group-item-warning'] },
    { text: 'A simple info list group item', classes: ['list-group-item', 'list-group-item-action', 'list-group-item-info'] },
    { text: 'A simple light list group item', classes: ['list-group-item', 'list-group-item-action', 'list-group-item-light'] },
    { text: 'A simple dark list group item', classes: ['list-group-item', 'list-group-item-action', 'list-group-item-dark'] }
  ];
  
  // Creo y agrego los elementos <a> al elemento <div> utilizando un forEach para recorrer la lista anterior
  items.forEach(item => {
    const crear_a = document.createElement('a');
    crear_a.setAttribute('href', '#');
    crear_a.textContent = item.text;
    crear_a.classList.add(...item.classes); // (...) ES un elemento que desglosa el array en elemntos individuales.
    div.appendChild(crear_a);
  });
  


body.appendChild(div);

});