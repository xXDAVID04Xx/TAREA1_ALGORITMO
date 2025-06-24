function recorrerFijo() {
    const frutas = ["manzana", "banana", "uva"];
    const lista = document.getElementById("resultado1");
    lista.innerHTML = "";

    for (let i = 0; i < frutas.length; i++) {
        let fruta = frutas[i];
        const li = document.createElement("li");
        li.textContent = fruta;
        lista.appendChild(li);
        console.log(fruta);
    }
}

function recorrerUsuario() {
    const input = document.getElementById("inputFrutas").value.trim();
    const lista = document.getElementById("resultado2");
    lista.innerHTML = "";

    if (input === "") {
        lista.innerHTML = "<li>Por favor, ingresa frutas separadas por comas.</li>";
        return;
    }

    const frutas = input.split(",").map(f => f.trim());

    for (let i = 0; i < frutas.length; i++) {
        let fruta = frutas[i];
        const li = document.createElement("li");
        li.textContent = fruta;
        lista.appendChild(li);
        console.log(fruta);
    }
}
