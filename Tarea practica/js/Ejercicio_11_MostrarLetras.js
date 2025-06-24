function mostrarFijo() {
    const palabra = "sol";
    const resultado = document.getElementById("resultado1");
    resultado.innerHTML = "";

    for (let i = 0; i < palabra.length; i++) {
        let letra = palabra[i];
        const li = document.createElement("li");
        li.textContent = letra;
        resultado.appendChild(li);
        console.log(letra);
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

    for (let i = 0; i < palabra.length; i++) {
        let letra = palabra[i];
        const li = document.createElement("li");
        li.textContent = letra;
        resultado.appendChild(li);
        console.log(letra);
    }
}
