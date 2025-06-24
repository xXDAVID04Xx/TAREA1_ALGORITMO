function mostrarCantidad(){
    palabra = document.getElementById("palabra").value;
    
    resultado.innerHTML = "";

    let cantidad = (palabra.length)
    resultado = document.getElementById("resultado");
    resultado.innerHTML=` La palabra ${palabra} tiene ${cantidad} letras`

}