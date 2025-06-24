function verificarPerfectos() {
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
    if (suma === numero) {
        div.innerHTML = `<strong>${numero}</strong> es un número perfecto.`;
        console.log(`${numero} es un número perfecto`);
    } else {
        div.innerHTML = `<strong>${numero}</strong> NO es un número perfecto.`;
        console.log(`${numero} NO es un número perfecto`);
    }
        resultado.appendChild(div);
    });
}
