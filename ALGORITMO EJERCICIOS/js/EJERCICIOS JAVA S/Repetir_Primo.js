function verificarPrimo() {
    const num = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

        resultado.textContent = ""; 

    if (num <= 1) {
        resultado.textContent = "Por favor, introduce un número mayor que 1.";
    return;
}

    let c = 0;
    let i = 1;

    while (i <= num) {
    if (num % i === 0) {
        c++;
    }
    i++;
}

    if (c === 2) {
    resultado.textContent = `${num} es un número primo.`;
} else {
    resultado.textContent = `${num} NO es un número primo.`;
}
}
