/* ++++++++++++ Ejercicios: ++++++++++++

>>> EJERCICIO 1: Convertir a función de flecha:
function messageUser(name) {
    return `Hello, my name is ${name}`;
  }
  
  console.log(messageUser("Bill Gates"));
  
>>> EJERCICIO 2: Desestructura el siguiente objeto y completa los mensajes:
  const iPad = {
    marca: "Apple",
    producto: "iPad",
    modelo: "8ª Generación",
    version: 2020,
  };
  console.log(`Producto: `);
  console.log(`Marca: `);
  console.log(`Modelo: `);
  console.log(`Versión: `);
  
>>> EJERCICIO 3: Desestructura el siguiente arreglo, obten el segundo nombre y usalo como parámetro de la función que viene en el mismo arreglo
  const personas = [
    "Laura",
  
    "Ernesto",
    "Eliana",
    (n) => `Bienvenido a React ${n}`,
  ];
*/

//++++++++++ Resoluciónes +++++++++++++++++++++

//EJERCICIO 1: Convertir a función de flecha:
console.log('********* Ejercicio 1 ********');

messageUser = (name) => `Hello, my name is ${name}`;

console.log(messageUser('Bill Gates'));
console.log('');

//EJERCICIO 2: Desestructura el siguiente objeto y completa los mensajes:
console.log('********* Ejercicio 2 ********');

const iPad = {
  marca: 'Apple',
  producto: 'iPad',
  modelo: '8ª Generación',
  version: 2020,
};

const { marca, producto, modelo, version } = iPad;
console.log(`Producto: ${producto}`);
console.log(`Marca: ${marca}`);
console.log(`Modelo: ${modelo}`);
console.log(`Versión: ${version}`);
console.log('');

//EJERCICIO 3: Desestructura el siguiente arreglo, obten el segundo nombre y usalo como parámetro de la función que viene en el mismo arreglo
console.log('********* Ejercicio 3 ********');

const personas = ['Laura', 'Ernesto', 'Eliana', (n) => `Bienvenido a React ${n}`];

const [name1, name2, name3, mensaje] = personas;

console.log(mensaje(name2));
console.log('');
