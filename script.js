
function mostrarMenu() {
    var opcion = prompt(
        "Selecciona un ejercicio para ejecutar:\n" +
        "1. Mostrar múltiplos de 5\n" +
        "2. Mostrar números del 1 al 50 con Lotería\n" +
        "3. Capturar números en un arreglo\n" +
        "4. Capturar palabras y concatenar\n" +
        "5. Mensajes personalizados según el día de la semana"
    );
    opcion = parseInt(opcion);
    if (opcion === 1) {
        ejercicio1();
    } else if (opcion === 2) {
        ejercicio2();
    } else if (opcion === 3) {
        ejercicio3();
    } else if (opcion === 4) {
        ejercicio4();
    } else if (opcion === 5) {
        ejercicio5();
    } else {
        alert("Opción no válida, por favor intenta de nuevo.");
    }
}

function ejercicio1() {
    var numero = prompt("Introduce un número:");
    numero = parseInt(numero);
    var resultado = "";
    var i = 1;
    while (i <= numero) {
        if (i % 5 === 0) {
            resultado += i + " ";
        }
        i++;
    }
    alert("Los múltiplos de 5 son: " + resultado);
}


function ejercicio2() {
    var num1 = prompt("Introduce el primer número entre 1 y 50:");
    var num2 = prompt("Introduce el segundo número entre 1 y 50:");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var i = 1;
    while (i <= 50) {
        if (i === num1 || i === num2) {
            console.log(i + " ¡Lotería!");
        } else {
            console.log(i);
        }
        i++;
    }
}


function ejercicio3() {
    var numeros = [];
    while (true) {
        var input = prompt("Introduce un número (0 para terminar):");
        input = parseInt(input);
        if (input === 0) {
            break;
        }
        if (!isNaN(input)) {
            numeros.push(input);
        }
    }
    console.log("Números capturados: " + numeros.join(", "));
}

function ejercicio4() {
    var palabras = [];
    while (true) {
        var input = prompt("Introduce una letra o palabra:");
        if (input === "") {
            break;
        }
        palabras.push(input);
    }
    alert("Palabras concatenadas: " + palabras.join(""));
}

function ejercicio5() {
    while (true) {
        var dia = prompt("Introduce un día de la semana:");
        if (dia.toLowerCase() === "lunes") {
            alert("Es lunes, inicio de la semana.");
        } else if (dia.toLowerCase() === "martes") {
            alert("Es martes, sigue adelante.");
        } else if (dia.toLowerCase() === "miércoles") {
            alert("Es miércoles, mitad de semana.");
        } else if (dia.toLowerCase() === "jueves") {
            alert("Es jueves, casi viernes.");
        } else if (dia.toLowerCase() === "viernes") {
            alert("Es viernes, fin de semana a la vista.");
        } else if (dia.toLowerCase() === "sábado") {
            alert("Es sábado, disfruta el descanso.");
        } else if (dia.toLowerCase() === "domingo") {
            alert("Ve a descansar");
            break;
        } else {
            alert("Día no reconocido, intenta de nuevo.");
        }
    }
}


mostrarMenu();
