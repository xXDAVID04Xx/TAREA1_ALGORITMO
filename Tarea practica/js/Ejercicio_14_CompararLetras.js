function compararFijo() {
    const palabra1 = "casa";
    const palabra2 = "cosa";
    const resultado = document.getElementById("resultadoFijo");
    resultado.innerHTML = "";

    let longitud = Math.min(palabra1.length, palabra2.length);

for (let i = 0; i < longitud; i++) {
    let letra1 = palabra1[i];
    let letra2 = palabra2[i];
    const li = document.createElement("li");
        li.textContent = `¿Son iguales en posición ${i}? ${letra1 === letra2}`;
        resultado.appendChild(li);
        console.log(`Posición ${i}: ${letra1} === ${letra2} ? ${letra1 === letra2}`);
    }
}

function compararUsuario() {
    const palabra2 = document.getElementById("inputPalabra2").value.trim();
    const resultado = document.getElementById("resultadoInput");
        resultado.innerHTML = "";
        const palabra1 = document.getElementById("inputPalabra1").value.trim();

    if (palabra1 === "" || palabra2 === "") {
        resultado.innerHTML = "<li>Por favor, ingresa ambas palabras.</li>";
        return;
}

    let longitud = Math.min(palabra1.length, palabra2.length);

    for (let i = 0; i < longitud; i++) {
        let letra1 = palabra1[i];
        let letra2 = palabra2[i];
        const li = document.createElement("li");
            li.textContent = `¿Son iguales en posición ${i}? ${letra1 === letra2}`;
            resultado.appendChild(li);
            console.log(`Posición ${i}: ${letra1} === ${letra2} ? ${letra1 === letra2}`);
}
}
