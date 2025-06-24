/*function mostrarLetras(){
    caracter = document.getElementById("caracter").value;
    resultado = document.getElementById("resultado");

        resultado.innerHTML = "";
    let nombre = caracter;
    let salida = "";

    let letra = nombre[0];
    salida += `Letra 1: ${letra}<br>`;

    letra = nombre[1];
    salida += `Letra 2: ${letra}<br>`;

    letra = nombre[2];
    salida += `Letra 3: ${letra}<br>`;

    letra = nombre[3];
    salida += `Letra 4: ${letra}<br>`;

    letra = nombre[4];
    salida += `Letra 5: ${letra}<br>`;

    letra = nombre[5];
    salida += `Letra 6: ${letra}<br>`;

    letra = nombre[6];
    salida += `Letra 7: ${letra}<br>`;

    letra = nombre[7];
    salida += `Letra 8: ${letra}<br>`;

    letra = nombre[8];
    salida += `Letra 9: ${letra}<br>`;
    
    letra = nombre[9];
    salida += `Letra 10: ${letra}<br>`;

    letra = nombre[10];
    salida += `Letra 11: ${letra}<br>`;

document.getElementById("resultado").innerHTML= salida;
}*/
function mostrarLetras() {
    const nombre = document.getElementById("caracter").value.trim();
    const resultado = document.getElementById("resultado");

    if (nombre === "") {
        resultado.innerHTML = "Por favor, escribe un nombre.";
        return;
    }

    let salida = "";

    if (nombre.length >= 1) salida += `Letra 1: ${nombre[0]}<br>`;
    if (nombre.length >= 2) salida += `Letra 2: ${nombre[1]}<br>`;
    if (nombre.length >= 3) salida += `Letra 3: ${nombre[2]}<br>`;
    if (nombre.length >= 4) salida += `Letra 4: ${nombre[3]}<br>`;
    if (nombre.length >= 5) salida += `Letra 5: ${nombre[4]}<br>`;
    if (nombre.length >= 6) salida += `Letra 6: ${nombre[5]}<br>`;
    if (nombre.length >= 7) salida += `Letra 7: ${nombre[6]}<br>`;
    if (nombre.length >= 8) salida += `Letra 8: ${nombre[7]}<br>`;
    if (nombre.length >= 9) salida += `Letra 9: ${nombre[8]}<br>`;
    if (nombre.length >= 10) salida += `Letra 10: ${nombre[9]}<br>`;

    resultado.innerHTML = salida;
}
