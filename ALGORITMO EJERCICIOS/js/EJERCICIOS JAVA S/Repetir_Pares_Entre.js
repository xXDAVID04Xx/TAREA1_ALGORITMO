function ParesEntreNumeros(){
    const n1 = parseInt(document.getElementById("numero1").value)
    const n2 = parseInt(document.getElementById("numero2").value)
    const resultado = document.getElementById("resultado");

        resultado.innerHTML = "";

        let c = Math.min(n1, n2);
    let fin = Math.max(n1, n2);
        while (c <= fin) {
            if (c % 2 === 0) {
            const div = document.createElement("div");
            div.className = "numero";
            div.textContent = c;
        resultado.appendChild(div);
        } 
        c++;
    }
}
