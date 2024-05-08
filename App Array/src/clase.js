/* longitud de una cadena en Javascript */
let name = "Pepito tiene el pelo rojo";
console.log(name.length);

/* Extraer caracteres de una cadena */
/* let position = name.at(-3); */
/* let position = name.charAt(-3); */
let position = name.charCodeAt(3);
console.log(position);

/* Extraer partes de un string */
/* console.log(name.slice(4, 7)); */
console.log(name.substring(4, 7));
console.log(name.substr(4, 7));

/* Mayusculas */
console.log(name.toUpperCase());

/* Minusculas */
console.log(name.toLowerCase());

let lastName = "Samuel Santana";

console.log(lastName.padStart(20, "a"));
console.log(lastName.padEnd(20, "a"));

console.log(lastName.split());

/////////////////////////

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(Array.isArray(name));

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls + myBoys;

console.log(myChildren);
