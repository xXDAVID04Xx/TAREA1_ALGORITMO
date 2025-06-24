
function arregloFruta(){
    let frutas = ["MANZANA", "PERA", "FRESA"]
    const lista = document.getElementById("listaFrutas");
    frutas.forEach(fruta => {
        const li = document.createElement("li");
        li.textContent = fruta;
        lista.appendChild(li);
        
    });
}

