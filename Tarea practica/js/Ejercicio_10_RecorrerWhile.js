function recorrerFijo() {
    const frutas = ["manzana", "banana", "uva"];
    const lista = document.getElementById("resultado1");
    lista.innerHTML = "";

    let i = 0;
    while (i < frutas.length) {
        let fruta = frutas[i];
        const li = document.createElement("li");
        li.textContent = fruta;
        lista.appendChild(li);
        console.log(fruta);
        i++;
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
    let i = 0;
    while (i < frutas.length) {
        let fruta = frutas[i];
        const li = document.createElement("li");
        li.textContent = fruta;
        lista.appendChild(li);
        console.log(fruta);
        i++;
    }
}
