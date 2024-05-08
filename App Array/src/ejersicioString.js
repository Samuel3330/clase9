/* Crea una función que reciba como argumento una cadena de caracteres y devuelva una cadena con todas las vocales y el número de veces que aparece cada una en la cadena argumento.

Procura usar prioritariamente los métodos del objeto string */

/* Ejemplo cuentaVocales("Hola soy Pepe") deberá imprimir a:1, e:2, i:0, o:2, u:0
 */

function cuentaVocales(frase) {
  let veces = [0, 0, 0, 0, 0];
  const vocales = "aeiou";
  let res = "",
    car,
    pos;
  frase = frase.toLowerCase();

  for (let i = 0; i < frase.length; i++) {
    car = frase.charAt(i);

    pos = vocales.indexOf(car); //Devuelve la posicion de la letra que busca y si no existe retorna -1
    if (pos >= 0) {
      veces[pos]++;
    }
  }
  for (let j = 0; j < vocales.length; j++) {
    res += vocales.charAt(j) + ":" + veces[j] + "/";
  }
  return res;
}

console.log(cuentaVocales("hola soy un ingeniero"));

/* crear una función que reciba como argumento una frase con letras y números. La función debe devolver la suma de todos los dígitos contenidos en la frase */

/* Al ejecutar cambiaCars("Estamos a 7 días de navidad y faltan 10 días para fin del año 2022), deberá devolver el número 14 (7+1 + 0 +2+0+2+2) */

function sumaDigs(frase) {
  let digito = "",
    suma = 0;
  for (let i = 0; i < frase.length; i++) {
    digito = parseInt(frase.charAt(i));
    if (!isNaN(digito)) {
      suma += digito;
    }
  }
  return suma;
}

let prueba = "Hola como estas";

/* Crea una función javascript que reciba como argumento una frase y que devuelva el número de espacios, dígitos y letras  contenidos en la frase. Puedes usar expresiones regulares */

/* Si llamo al a funcion contarCars("Si, hoy es dia 10") debería devolver
2 digitos, 4 espacios y 10 letras */

function contarCars(frase) {
  let esp, dig, pep, lista;
  lista = frase.match(/\s/g); //El método match() devuelve todas las ocurrencias de una expresión regular dentro de una cadena.
  esp = lista.length;
  lista = frase.match(/[0-9]/g);
  dig = lista.length;
  lista = frase.match(/[a-z]/gi);
  pep = lista.length;
  console.log("Hay " + esp + " espacios");
  console.log("Hay " + dig + " digitos");
  console.log("Hay " + pep + " letras");
}
