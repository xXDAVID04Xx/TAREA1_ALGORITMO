function contarVocalesFijo() {
    const palabra = "murciélago";
    const vocales = ["a", "e", "i", "o", "u"];
    const resultado = document.getElementById("resultadoFijo");

    let totalVocales = 0;
    let conteo = { a: 0, e: 0, i: 0, o: 0, u: 0 };

    for (let letra of palabra.toLowerCase()) {
        if (vocales.includes(letra)) {
        conteo[letra]++;
        totalVocales++;
    }
}

    let mensaje = `La palabra tiene <strong>${totalVocales}</strong> vocal(es):<br/>`;
    for (let v of vocales) {
        mensaje += `${v.toUpperCase()}: ${conteo[v]}<br/>`;
}

    resultado.innerHTML = mensaje;
    console.log(conteo);
}

function contarVocalesInput() {
    const palabra = document.getElementById("inputPalabra").value.trim().toLowerCase();
    const vocales = ["a", "e", "i", "o", "u"];
    const resultado = document.getElementById("resultadoInput");

    if (palabra === "") {
        resultado.innerHTML = "Por favor, escribe una palabra.";
        return;
}

    let totalVocales = 0;
    let conteo = { a: 0, e: 0, i: 0, o: 0, u: 0 };

    for (let letra of palabra) {
        if (vocales.includes(letra)) {
        conteo[letra]++;
        totalVocales++;
    }
}

    let mensaje = `La palabra tiene <strong>${totalVocales}</strong> vocal(es):<br/>`;
    for (let v of vocales) {
        mensaje += `${v.toUpperCase()}: ${conteo[v]}<br/>`;
}

    resultado.innerHTML = mensaje;
    console.log(conteo);
}
