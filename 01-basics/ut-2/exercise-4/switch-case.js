const DEFAULT_DAY = "Número de día inválido";
/** Crear una función que devuelva los días de la semana en función de un número dado, haciendo uso de switch case
 * 1 -> Lunes
 * 2 -> Martes
 * 3 -> Miércoles
 * 4 -> Jueves
 * 5 -> Viernes
 * 6 -> Sábado
 * 7 -> Domingo
 * Cualquier otra opción -> DEFAULT_DAY
 */

export const getDayOfWeekSC = (day) => {
    switch (day) {
        case 1:
          return "Lunes";
        case 2:
          return "Martes";
        case 3:
          return "Miércoles";
        case 4:
          return "Jueves";
        case 5:
          return "Viernes";
        case 6:
          return "Sábado";
        case 7:
          return "Domingo";
        default:
          return DEFAULT_DAY;
      }
};

/** Crear un objeto que devuelva los días de la semana en función de un número dado, haciendo uso de un objeto literal
=======
export const getDayOfWeekSC = (day) => {};

/** Crear una objeto que devuelva los días de la semana en función de un número dado, haciendo uso de un objeto literal
>>>>>>> a88a5969b91e50425191c01bb42dbbf9bb8aa6e1
 * 1 -> Lunes
 * 2 -> Martes
 * 3 -> Miércoles
 * 4 -> Jueves
 * 5 -> Viernes
 * 6 -> Sábado
 * 7 -> Domingo
 */

let dayOfWeek = {
    1: "Lunes",
    2: "Martes",
    3: "Miércoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sábado",
    7: "Domingo",
};


/** Crear una función que haciendo uso del objeto literal definido arriba
 * devuelva los días de la semana en función de un número dado
 * 1 -> Lunes
 * 2 -> Martes
 * 3 -> Miércoles
 * 4 -> Jueves
 * 5 -> Viernes
 * 6 -> Sábado
 * 7 -> Domingo
 * Cualquier otra opción -> DEFAULT_DAY
 */

export const getDayOfWeekObject = (day) => {
    return dayOfWeek[day] || DEFAULT_DAY;
};


/************************************************ */

const DEFAULT_OPERARTOR_ERROR = "Operator invalid";

/**

 * Crea una calculadora básica que sume, reste, multiplique y divide. Usando switch case
 * Operadores validos ("+", "-", "*", "/")
 * En cualquier otro caso debe devolver DEFAULT_OPERARTOR_ERROR
 */
export const simpleCalculatorSC = (operartor, num_1, num_2) => {
    switch (operartor) {
        case "+":
          return num_1 + num_2;
        case "-":
          return num_1 - num_2;
        case "*":
          return num_1 * num_2;
        case "/":                    //  if (num_2 === 0) {return "No es posible dividir por cero";}
          return num_1 / num_2;
        default:
          return DEFAULT_OPERARTOR_ERROR;
      }   
};



/**
 * Crea un objeto con los operadores básicos +, -, *, ,/
 * Cada propieda del objeto debe realizar la operación correspodiente
 */

let calculatorObject = {
    "+": (num_1, num_2) => num_1 + num_2,
    "-": (num_1, num_2) => num_1 - num_2,
    "*": (num_1, num_2) => num_1 * num_2,
    "/": (num_1, num_2) => num_1 / num_2,
};



/**
 * Crea una función que haga uso de objeto que has creado arriba y que además devuelva DEFAULT_OPERARTOR_ERROR
 * si se introduce cualquier cosa que sea diferente a "+", "-", "*", "/"
 *
 */

export const simpleCalculatorObject = (operartor, num_1, num_2) => {
    const operation = calculatorObject[operartor];
    if (operation) {
      return operation(num_1, num_2);
    } else {
      return DEFAULT_OPERARTOR_ERROR;
    }
};

