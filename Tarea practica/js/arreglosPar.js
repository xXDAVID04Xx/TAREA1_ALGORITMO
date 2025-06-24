function arregloPar(){
    debugger
    let arregloPar = document.getElementById("numeros").value;
    let numeros = arregloPar.split(";").map(Number);
    let result = document.getElementById("Resultado");
    result.innerHTML = "Numeros pares: <br>";
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i]% 2 === 0){
            result.innerHTML += `${numeros[i]} <br>`;
        }
    }

}