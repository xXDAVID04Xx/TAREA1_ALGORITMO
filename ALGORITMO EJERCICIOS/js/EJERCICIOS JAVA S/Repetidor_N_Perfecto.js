function verificarPerfecto() {
    const num = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
        resultado.textContent = "";

    if (num <= 0) {
        resultado.textContent = "Por favor, introduce un número mayor que 0.";
        return;
}
    let suma = 0;
    let i = 1;

    while (i < num) {
        if (num % i === 0) {
        suma += i;
        }
    i++;
}

    if (suma === num) {
    resultado.textContent = `${num} es un número perfecto.`;
} else {
        resultado.textContent = `${num} NO es un número perfecto.`;
    }
}
