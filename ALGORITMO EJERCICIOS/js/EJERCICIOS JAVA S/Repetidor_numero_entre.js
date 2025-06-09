function NumerosEntreNumeros(){
    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);
    const resultado = document.getElementById("resultado");

        resultado.innerHTML = "";

    let c = Math.min(numero1, numero2);
    let fin = Math.max(numero1, numero2);
        while (c <= fin) {
            const div = document.createElement("div");
        div.classnumero = "numero";
        div.textContent = c;
    resultado.appendChild(div);
        c++;
    }
}