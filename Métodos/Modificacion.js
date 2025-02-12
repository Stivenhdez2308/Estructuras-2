let numeros = [10, 20, 30, 40, 50];

// 1. push: Agrega un elemento al final del array
// Agrega un elemento al final del array

numeros.push(60);
console.log("1. push:", numeros); // [10, 20, 30, 40, 50, 60]

// 2. pop: Elimina el último elemento del array
// Elimina el último elemento del array y lo devuelve

let eliminado = numeros.pop();
console.log("2. pop:", eliminado, numeros); // 60, [10, 20, 30, 40, 50]

// 3. shift: Elimina el primer elemento del array
// Elimina el primer elemento del array y lo devuelve

eliminado = numeros.shift();
console.log("3. shift:", eliminado, numeros); // 10, [20, 30, 40, 50]

// 4. unshift: Agrega un elemento al inicio del array
// Agrega un elemento al inicio del array

numeros.unshift(5);
console.log("4. unshift:", numeros); // [5, 20, 30, 40, 50]

// 5. splice: Agrega o elimina elementos en una posición específica
// Elimina 1 elemento en la posición 2.
// Inserta 25 en esa misma posición.

numeros.splice(2, 1, 25);
console.log("5. splice:", numeros); // [5, 20, 25, 40, 50]

// 6. slice: Extrae una parte del array sin modificar el original
// Crea un nuevo array con una porción del original sin modificarlo

let segmento = numeros.slice(1, 3);
console.log("6. slice:", segmento); // [20, 25]
