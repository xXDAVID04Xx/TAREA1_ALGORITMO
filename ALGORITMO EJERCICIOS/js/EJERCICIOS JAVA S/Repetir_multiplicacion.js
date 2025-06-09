function TablaMultiplicacion() {
    const numTabla = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    let c = 5;
    while (c <= 8) {
        const fila = document.createElement("div");
            fila.className = "fila";
            fila.textContent = `${numTabla} * ${c}  = ${c * numTabla}`;
    resultado.appendChild(fila);
    c++;
    }
}
