const HOLA = "Welcome to the application!";
const INFO = "This is an information message";
const WARNING = "This is a warning: Be carefull";
const ERROR = "Error! Something went wrong";

console.log(`%c${HOLA}`, 'color: blue; font-weight: bold; font-size: 18px;');
console.log(`%c${INFO}`, 'color: green; font-size: 16px;');
console.warn(`%c${WARNING}`, 'font-size: 16px;');
console.error(`%c${ERROR}`, 'font-size: 16px;');

let name1 = "Jonh";
let age1 = 30;
let city1 = "New York";
let name2 = "Jane";
let age2 = 25;
let city2 = "San Francisco";
let name3 = "Bob";
let age3 = 40;
let city3 = "Chicago";

console.table([
    {name:name1,age:age1,city:city1},
    {name:name2,age:age2,city:city2},
    {name:name3,age:age3,city:city3}
]);