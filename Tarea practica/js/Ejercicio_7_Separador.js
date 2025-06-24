
function separarLetras2() {
    const palabra = "hola";
    const letras = palabra.split("");
    document.getElementById("resultado2").textContent = `Letras: [${letras.join(", ")}]`;
    console.log(letras);
}

function separarLetras() {
    const palabra = document.getElementById("palabraInput").value.trim();
    
    if (palabra === "") {
        document.getElementById("resultado").textContent = "Por favor, escribe una palabra.";
        return;
    }

    const letras = palabra.split("");
    document.getElementById("resultado").textContent = `Letras: [${letras.join(", ")}]`;
    console.log(letras);
}
