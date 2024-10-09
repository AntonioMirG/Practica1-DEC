//4 - Crear una función que calcule el mcm de un número indefinido de números que se pasan como parámetros de la función. Esta función se puede implementar de varias maneras, pero vamos a ir a una simple a partir de lasiguiente definición:


function mcm(a, b) {

    let multiplo = a * b;    

    console.log("La multiplicación de " + a + " y " + b + " es: " + multiplo);

    for (let index = 1; index <= multiplo; index++) {  

        if (index % a == 0 && index % b == 0) {

            console.log("El mcm de " + a  + " y " + b + " es: " + index);

            return index;   
        }
    }
}

console.log(mcm(4, 6));   
