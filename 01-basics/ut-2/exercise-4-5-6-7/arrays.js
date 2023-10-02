export const games = ["Zelda", "Mario Bros", "Metroid", "Chrono"];

/**
 * Removes the first element from an array and returns it.
 * If the array is empty, undefined is returned and the array is not modified.
 */
export const deleteFirtPosition = () => {
  // TODO: implement
  if(games.lenght === 0){
    return undefined;
  } if (games.length > 0){
    const deletedItem = games.shift(); // shift() elimina y muestra el ultimo elemento
    return deletedItem;
  }
};


/**
 * Removes the last element from an array and returns it.
 * If the array is empty, undefined is returned and the array is not modified.
 */
export const deleteLastPosition = () => {
  // TODO: implement
  if(games.lenght === 0){
    return undefined;
  } if (games.length > 0){
    const deletedItem = games.pop(); // pop() elimina y muestra el ultimo elemento
    return deletedItem;
  }
};

/**
 * Inserts new element at the start of an array, and returns the new length of the array.
 * @param item Element to insert at the start of the array.
 */
export const addFirstPosition = (item) => {
  // TODO: implement
  const newLength = games.unshift(item); // unshif() Hace lo contrario que Shift(), añade en la primera posición pero devuelve la nueva longitud del array.
  return newLength;
};

/**
 * Appends new element to the end of an array, and returns the new length of the array.
 * @param item New element to add to the array.
 */
export const addLastPosition = (item) => {
  // TODO: implement
  const newLength = games.push(item); // push() Hace lo contrario que pop(), añade en la ultima posición pero devuelve la nueva longitud del array.
  return newLength;
};

/******************************************************/
export const got = [
  "Lannister",
  "Targaryen",
  "Stark",
  "Baratheon",
  "Greyjoy",
  "Arryn",
  "Martell",
];

/**
 * Removes Baratheon and Greyjoy houses
 * @returns array with items removes
 */
export const removeBaratheonAndGreyjoy = () => {
  // TODO: implement
  let eliminados = got.splice(3, 2);
  return eliminados;
};

/**
 * Removes Arryn house
 * @returns array with items removes
 */
export const removeArryn = () => {
  // TODO: implement
  let eliminados = got.splice(3, 1);
  return eliminados;
};

/******************************************************/
export const narutoCharacters = [
  "Naruto",
  "Sasuke",
  "Sakura",
  "Hinata",
  "Kakashi",
  "Jiraiya",
  "Itachi",
  "Gaara",
];

/**
 * Gets the index of Naruto
 * @returns the index found.
 */
export const getNaruto = () => {
  // TODO: implement
  const Naruto = narutoCharacters.indexOf("Naruto");
  return Naruto;
};

/**
 * Gets the index of Gaara
 * @returns the index found.
 */
export const getGaara = () => {
  // TODO: implement
  const Gaara = narutoCharacters.indexOf("Gaara");
  return Gaara;
};

/**
 * Gets the index of Rock Lee
 * @returns the index found.
 */
export const getRockLee = () => {
  // TODO: implement
  return narutoCharacters.indexOf("Rock Lee")
};

/**
 * Reverses the elements in Naruto Characters array
 * @returns the reversed given array
 */
export const reverseNarutoCharacters = () => {
  // TODO: implement
  return narutoCharacters.reverse();
};
