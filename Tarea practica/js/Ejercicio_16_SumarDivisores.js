function sumarDivisores() {
    const input = document.getElementById("inputNumeros").value.trim();
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (input === "") {
    resultado.innerHTML = "<p>Por favor, ingresa números separados por coma.</p>";
    return;
}

    const numeros = input.split(",").map(num => Number(num.trim())).filter(num => !isNaN(num));

    if (numeros.length === 0) {
    resultado.innerHTML = "<p>Por favor, ingresa números válidos.</p>";
    return;
}

    numeros.forEach(numero => {
    let suma = 0;
    let d = 1;
    while (d < numero) {
        if (numero % d === 0) {
            suma += d;
}
    d++;
}
    const div = document.createElement("div");
    div.innerHTML = `<strong>Suma de divisores de ${numero} (sin incluir el número):</strong> ${suma}`;
    resultado.appendChild(div);
    console.log(`Suma de divisores de ${numero}: ${suma}`);
    });
}
