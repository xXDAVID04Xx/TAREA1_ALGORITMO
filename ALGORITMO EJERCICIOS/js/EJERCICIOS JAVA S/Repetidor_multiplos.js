function presentarMultiplos(){
const n = parseInt(document.getElementById("numero").value);
const multiplo = document.getElementById("multiplo").value;
const resultado = document.getElementById("resultado");

    resultado.innerHTML = ""; 

    let c = 1;
        while (c <= n) {
        if (c % multiplo === 0) {
            const div = document.createElement("div");
            div.className = "numero";
            div.textContent = c;
        resultado.appendChild(div);
        }
        c++;
    }
}