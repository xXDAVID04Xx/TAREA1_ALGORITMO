function sumaDivisores(){

    const num = parseInt(document.getElementById("num1").value);
    const resultado = document.getElementById("resultado");
        resultado.innerHTML = "";



    let i = 1;
    let suma = 0; 

    while (i <= num) {
        if (num % i === 0) { 
        suma += i;
        }
    i++;
    }
    resultado.textContent = `La suma de los divisores es: ${suma}`;
}
