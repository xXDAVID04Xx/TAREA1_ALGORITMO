function repetidorNumero(){
    const numero = parseFloat(document.getElementById("cantidad").value);
    const n = parseInt(document.getElementById("cantidad").value);
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = ""; 

let c = 1;
    while (c <= n) {
    const div = document.createElement("div");
        div.classnumero = "numero";
        div.textContent = c;
    resultado.appendChild(div);
        c++;
    }

}