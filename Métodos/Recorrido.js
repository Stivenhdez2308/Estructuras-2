let numeros = [10, 20, 30, 40, 50];

// 1. forEach: Itera sobre cada elemento
// Se utiliza el método .forEach() para recorrer el array numeros e imprimir cada elemento

console.log("1. forEach:");
numeros.forEach(num => console.log("   ", num));

// 2. find: Encuentra el primer elemento que cumple la condición
//Busca el primer elemento del array que cumple con la condición (num > 25)

let encontrado = numeros.find(num => num > 25);
console.log("2. find:", encontrado); // 30

// 3. findIndex: Encuentra el índice del primer elemento que cumple la condición
// Devuelve el índice del primer elemento que cumple con la condición (num > 25)

let indice = numeros.findIndex(num => num > 25);
console.log("3. findIndex:", indice); // 2

// 4. filter: (Devuelve un nuevo array con los elementos que cumplen la condición)
// Crea un nuevo array con todos los elementos que cumplen la condición (num > 25)

let filtrados = numeros.filter(num => num > 25);
console.log("4. filter:", filtrados); // [30, 40, 50]

// 5. map: (Devuelve un nuevo array transformando los elementos)
// Transforma cada elemento del array aplicando la función num * 2 y devuelve un nuevo array

let duplicados = numeros.map(num => num * 2);
console.log("5. map:", duplicados); // [20, 40, 60, 80, 100]

// 6. some: (Verifica si al menos un elemento cumple la condición)
// Devuelve true si al menos un elemento cumple la condición (num > 45), de lo contrario, devuelve false

let hayMayores = numeros.some(num => num > 45);
console.log("6. some:", hayMayores); // true

// 7. every: (Verifica si todos los elementos cumplen la condición)
// Devuelve true solo si todos los elementos cumplen la condición (num > 5), de lo contrario, devuelve false

let todosMayores = numeros.every(num => num > 5);
console.log("7. every:", todosMayores); // true
