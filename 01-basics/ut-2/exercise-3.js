// Crear un objeto literal con 7 propiedades
const ObjetoLiteral = {
    nombre: "Ejemplo",
    edad: 30,
    ciudad: "Ciudad Ejemplo",
    intereses: [ "salir con amigos", "deporte"],
    direccion: {
      calle: "Calle ygygygy",
      numero: 123,
    },
    contacto: {
      email: "example@example.com",
      telefono: "123456789",
    },
    esEstudiante: true,
  };
  
  // Función que devuelve todas las claves del objeto
  function obtenerClaves(objeto) {
    return Object.keys(objeto);
  }
  
  // Función que devuelve todos los valores del objeto
  function obtenerValores(objeto) {
    return Object.values(objeto);
  }
  
  // Llamamos a las funciones y mostramos los resultados en la consola
  console.log("Claves del objeto:", obtenerClaves(ObjetoLiteral));
  console.log("Valores del objeto:", obtenerValores(ObjetoLiteral));