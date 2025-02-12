const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función regular
function esParOImpar(num) {
    if (num % 2 === 0) {
        console.log(`${num} es par`);
    } else {
        console.log(`${num} es impar`);
    }
}

// Función de flecha
const esParOImparFlecha = num => 
    console.log(`${num} es ${num % 2 === 0 ? "par" : "impar"}`);

rl.question("Ingrese un número para la función regular: ", (input1) => {
    const num1 = parseInt(input1);
    if (!isNaN(num1)) { 
        esParOImpar(num1);
    } else {
        console.log("Por favor, ingrese un número válido.");
    }

    rl.question("Ingrese un número para la función de flecha: ", (input2) => {
        const num2 = parseInt(input2);
        if (!isNaN(num2)) { 
            esParOImparFlecha(num2);
        } else {
            console.log("Por favor, ingrese un número válido.");
        }
        rl.close();
    });
});
