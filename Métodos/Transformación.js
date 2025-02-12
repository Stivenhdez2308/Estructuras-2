let numeros = [10, 20, 30, 40, 50];

// 1. map: Devuelve un nuevo array transformando los elementos
// Crea un nuevo array transformando cada elemento según la función dada
// En este caso, eleva al cuadrado cada número del array

let cuadrados = numeros.map(num => num ** 2);
console.log("1. map:", cuadrados); // [100, 400, 900, 1600, 2500]

// 2. reduce: Reduce el array a un solo valor
// Reduce el array a un único valor, aplicando una función acumuladora

let suma = numeros.reduce((acum, num) => acum + num, 0);
console.log("2. reduce:", suma); // 150

// 3. reduceRight: Similar a reduce, pero opera de derecha a izquierda
// Igual que reduce(), pero comienza de derecha a izquierda

let resta = numeros.reduceRight((acum, num) => acum - num);
console.log("3. reduceRight:", resta); // 50 - 40 - 30 - 20 - 10 = -50

// 4. join: Une todos los elementos en una cadena
// Convierte el array en una cadena, separando los elementos con el carácter indicado

let cadena = numeros.join(" - ");
console.log("4. join:", cadena); // "10 - 20 - 30 - 40 - 50"

// 5. toString: Convierte el array en una cadena
// Convierte el array en una cadena de texto, separando los elementos por comas ,

console.log("5. toString:", numeros.toString()); // "10,20,30,40,50"