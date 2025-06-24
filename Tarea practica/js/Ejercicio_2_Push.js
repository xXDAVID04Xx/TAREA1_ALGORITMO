function PushClick(){
    let numeros = [1, 2] 
    numeros.push(3)
    
resultado = document.getElementById("resultado").innerHTML = `Arreglo: [${numeros.join(', ')}]`;
}