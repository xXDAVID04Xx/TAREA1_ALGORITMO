function TablaSuma() {
    const numTabla = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; 

    let c = 1;
    while (c <= 12) {
        const fila = document.createElement("div");
            fila.className = "fila";
            fila.textContent = `${c} + ${numTabla} = ${c + numTabla}`;
    resultado.appendChild(fila);
    c++;
    }
}
