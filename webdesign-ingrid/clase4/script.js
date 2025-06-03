alert("hello!")

let numberOne = document.getElementById("numero1");
let numberTwo = document.getElementById("numero2");
let result = document.getElementById("resultado");
let botonSumar = document.getElementById("sumar");
botonSumar.disabled = true; // Inicialmente deshabilitado

function sumar(){
    result.value = parseFloat(numberOne.value) + parseFloat(numberTwo.value);
}

//evento de escucha - listener
botonSumar.addEventListener("click", sumar); //click: un click; dblclick: doble click

// Agregar eventos de escucha para detectar cambios en los inputs
numberOne.addEventListener("input", validar);
numberTwo.addEventListener("input", validar);

function validar(){
    if(numberOne.value.trim() != "" && numberTwo.value.trim() != ""){
        botonSumar.disabled = false;
    }else{
        botonSumar.disabled = true;
        result.value = "";
    }
}

/*
// Función para validar los imputs
function validar() {
    // Si ambos inputs tienen un valor, activa el botón
    botonSumar.disabled = !(numberOne.value.trim() && numberTwo.value.trim());
    // Si alguno de los inputs está vacío, borra el resultado
    if (!numberOne.value.trim() || !numberTwo.value.trim()) {
        result.value = "";
    }
}
*/

//DOCUMENTACIÓN BY INGRID
/*input.value.trim(): Elimina espacios en blanco al inicio y al final del texto para evitar 
que el botón se active con solo espacios.*/