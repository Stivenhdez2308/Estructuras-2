let numeros = [10, 20, 30, 40, 50];

// 1. includes: Verifica si un elemento está en el array
// Verifica si un elemento está presente en el array y devuelve true o falseS

console.log("1. includes (30):", numeros.includes(30)); // true

// 2. indexOf: Devuelve el índice del primer elemento encontrado
//Devuelve el índice de la primera aparición de un elemento en el array
//Si el elemento no está, devuelve -1

console.log("2. indexOf (40):", numeros.indexOf(40)); // 3

// 3. lastIndexOf: Devuelve el índice del último elemento encontrado
//Devuelve el índice de la última aparición del elemento en el array

console.log("3. lastIndexOf (50):", numeros.lastIndexOf(50)); // 4

// 4. reverse: Invierte el array
// Invierte el orden de los elementos en el array

let invertido = [...numeros].reverse();
console.log("4. reverse:", invertido); // [50, 40, 30, 20, 10]

// 5. sort: Ordena el array
// Ordena los elementos del array
// Por defecto, sort() ordena como texto, así que se debe usar una función de comparación numérica

let desordenado = [50, 10, 40, 20, 30];
desordenado.sort((a, b) => a - b);
console.log("5. sort:", desordenado); // [10, 20, 30, 40, 50]

// 6. concat: Concatena dos arrays
// Une dos arrays y devuelve un nuevo array

let nuevosNumeros = numeros.concat([60, 70]);
console.log("6. concat:", nuevosNumeros); // [10, 20, 30, 40, 50, 60, 70]
