function multiplicarSumandoWhile() {
    const a = parseInt(document.getElementById("numA").value);
    const b = parseInt(document.getElementById("numB").value);
    const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.textContent = "";

    let resultado = 0;
    let i = 1;
        while (i <= b) {
            resultado += a;
        i++;
    }

    resultadoDiv.textContent = `${a} x ${b} = ${resultado}`;
}
