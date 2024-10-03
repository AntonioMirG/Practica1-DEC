let palabras = "hola buenas tardes que tal estais";
 
function mayusculas(palabras) {
    let cadenanueva = ""; 

    for (let index = 0; index < palabras.length; index++) {
        if (index == 0) {
            cadenanueva += palabras[index].toUpperCase();
        }
        else if (palabras[index] == ' ' || palabras[index] == '.' || palabras[index] == ',') {
            cadenanueva += palabras[index];


            if (index + 1 < palabras.length) {
                cadenanueva += palabras[index + 1].toUpperCase();
                index++;
            }
        }
        else {
            cadenanueva += palabras[index];
        }
    }
    return cadenanueva;
}

console.log(mayusculas(palabras));




