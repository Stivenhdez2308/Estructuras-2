// Función Regular
// Se pueden declarar con function nombre() {} o como funciones anónimas (function () {})
// Tienen su propio this, lo que significa que el valor de this depende de cómo se llame la función

function sumaRegular(a, b) {
    return a + b;
}
console.log(sumaRegular(3, 5)); // 8

// Función de Flecha (=>)
// Se declaran con const nombre = () => {}
// No tienen su propio this, sino que heredan el this del contexto donde fueron creadas

const sumaFlecha = (a, b) => a + b;
console.log(sumaFlecha(3, 5)); // 8