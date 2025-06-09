function DivisorNumero(){

    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

        resultado.innerHTML = "";  
    
    const titulo = document.createElement("p");
        titulo.textContent = `Divisores de ${numero}:`;
        resultado.appendChild(titulo);


    let i = 1;

    while (i <= numero) {
        if (numero % i === 0) {
        const div = document.createElement("div");
        div.className = "divisor";
        div.textContent = i;
        resultado.appendChild(div);
        }
    i++;
    }
}

