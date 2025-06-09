function sumaPares(){

    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const resultado = document.getElementById("resultado");
resultado.innerHTML = "";
    let c = Math.min(num1, num2);
    const fin = Math.max(num1, num2);
    let suma = 0;
    while (c <= fin) {
        if (c % 2 === 0) {
        suma += c; 
        }
        c++;
    }
    resultado.textContent = `La suma de los pares es: ${suma}`;
}
