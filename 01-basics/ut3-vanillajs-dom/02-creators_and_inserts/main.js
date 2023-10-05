document.addEventListener("DOMContentLoaded", function () {

// Crear la imagen
const img = document.createElement("img");
img.src = "./img_la.jpg";
img.alt="LA";
document.body.appendChild(img);

// Crear el elemento h1
const h1 = document.createElement("h1");
h1.textContent="This is a Heading";
document.body.appendChild(h1);

// Crear el primer párrafo
const p1 = document.createElement("p");
p1.textContent="This is a paragraph.";
document.body.appendChild(p1);

// Crear el segundo párrafo
const p2 = document.createElement("p");
// Sustituyo el .textContent por crear una constante utilizando .createTextNode y aplicandolo con un appendChild al elemento creado
const p2Text = document.createTextNode("This is a another paragraph.");
p2.appendChild(p2Text);
document.body.appendChild(p2);

//Utilizando .append puedo introducirlo todo. Se sustituiria todos los .appendChild por un document.body.append(img,h1,p1,p2)
});