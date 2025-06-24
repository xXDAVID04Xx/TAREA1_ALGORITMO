function mostrarFijo() {
    const palabra = "luna";
    const resultado = document.getElementById("resultado1");
    resultado.innerHTML = "";

    let j = 0;
    while (j < palabra.length) {
        let letra = palabra[j];
        const li = document.createElement("li");
        li.textContent = letra;
        resultado.appendChild(li);
        console.log(letra);
        j++;
    }
}

function mostrarUsuario() {
    const palabra = document.getElementById("inputPalabra").value.trim();
    const resultado = document.getElementById("resultado2");
    resultado.innerHTML = "";

    if (palabra === "") {
        resultado.innerHTML = "<li>Por favor, escribe una palabra.</li>";
        return;
    }

    let j = 0;
    while (j < palabra.length) {
        let letra = palabra[j];
        const li = document.createElement("li");
        li.textContent = letra;
        resultado.appendChild(li);
        console.log(letra);
        j++;
    }
}
