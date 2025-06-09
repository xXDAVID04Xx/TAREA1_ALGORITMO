function dividirRestandoWhile() {
    const dividendo = parseInt(document.getElementById("dividendo").value);
    const divisor = parseInt(document.getElementById("divisor").value);
    const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.textContent = "";

    if (divisor === 0) {
        resultadoDiv.textContent = "Error: división por cero.";
    return;
}

    let cociente = 0;
    let resto = dividendo;

    while (resto >= divisor) {
        resto -= divisor;
        cociente++;
}

    resultadoDiv.textContent = `Cociente: ${cociente}, Residuo: ${resto}`;
}
