function presentarPares(){
const n = parseInt(document.getElementById("numero").value);
const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    let c = 1;
        while (c <= n) {
        if (c % 2 === 0) {
            const div = document.createElement("div");
            div.className = "numero";
            div.textContent = c;
        resultado.appendChild(div);
        }
        c++;
    }
}