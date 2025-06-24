function mostrarDivisores() {
    const input = document.getElementById("inputNumeros").value.trim();
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (input === "") {
        resultado.innerHTML = "<p>Por favor, ingresa números separados por coma.</p>";
        return;
}

  // Convertir cadena a arreglo de números
    const numeros = input.split(",").map(num => Number(num.trim())).filter(num => !isNaN(num));

    if (numeros.length === 0) {
        resultado.innerHTML = "<p>Por favor, ingresa números válidos.</p>";
        return;
}

    numeros.forEach(numero => {
        let divisores = [];
        let d = 1;
        while (d <= numero) {
        if (numero % d === 0) {
            divisores.push(d);
}
        d++;
}
    // Mostrar resultado para cada número
    const div = document.createElement("div");
    div.innerHTML = `<strong>Divisores de ${numero}:</strong> ${divisores.join(", ")}`;
    resultado.appendChild(div);
    console.log(`Divisores de ${numero}:`, divisores);
    });
}
