function escribirNombre() {
     let  nombre = "";
     let  n = 0;

     nombre = document.getElementById("nombre").value;
     n = parseInt(document.getElementById("cantidad").value);
     const resultado = document.getElementById("resultado");

     resultado.innerHTML = ""; 

let c = 1;
     while (c <= n) {
     const div = document.createElement("div");
          div.className = "nombre"
          div.textContent = nombre;
     resultado.appendChild(div);
     c++;
     }
}
