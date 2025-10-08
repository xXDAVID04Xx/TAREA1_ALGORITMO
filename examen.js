let libros = [
  { titulo: "Cien años de soledad", autor: "G. García Márquez", año: 1967 },
  { titulo: "Don Quijote", autor: "Miguel de Cervantes", año: 1605 },
  { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", año: 1943 },
  { titulo: "Harry Potter", autor: "J.K. Rowling", año: 2001 },
  { titulo: "Los Juegos del Hambre", autor: "Suzanne Collins", año: 2008 }
];

//mostrar la lista completa de libros
console.log("Lista completa de libros:");
for (let i = 0; i < libros.length; i++) {
  console.log((i + 1) + ". " + libros[i].titulo + " - " + libros[i].autor + " (" + libros[i].año + ")");
}

//buscar un libro por título
let buscar = prompt("Ingrese el título del libro que desea buscar:");
let encontrado = false;
for (let i = 0; i < libros.length; i++) {
  if (libros[i].titulo === buscar) {
    encontrado = true;
    console.log("Libro encontrado: " + libros[i].titulo + " - " + libros[i].autor + " (" + libros[i].año + ")");
    break;
  }
}
if (encontrado === false) {
  console.log("Libro no encontrado.");
}

//contar libros publicados después del año 2000
let contador = 0;
for (let i = 0; i < libros.length; i++) {
  if (libros[i].año > 2000) {
    contador = contador + 1;
  }
}
console.log("Libros publicados después del año 2000: " + contador);

//concatenar todos los títulos
let cadena = "";
for (let i = 0; i < libros.length; i++) {
  cadena = cadena + libros[i].titulo;
  if (i < libros.length - 1) {
    cadena = cadena + " – ";
  }
}
console.log("Títulos concatenados: " + cadena);

//actualizar el año de publicación de un libro
let tituloActualizar = prompt("Ingrese el título del libro a actualizar:");
let nuevoAño = parseInt(prompt("Ingrese el nuevo año:"));
let actualizado = false;
for (let i = 0; i < libros.length; i++) {
  if (libros[i].titulo === tituloActualizar) {
    libros[i].año = nuevoAño;
    actualizado = true;
    console.log("Año actualizado: " + libros[i].titulo + " - " + libros[i].año);
    break;
  }
}
if (actualizado === false) {
  console.log("Libro no encontrado para actualizar.");
}

// Bloque 2
let pila = [];

//agregar libros (push)
for (let i = 1; i <= 3; i++) {
  let titulo = prompt("Ingrese el título del libro " + i + ":");
  let autor = prompt("Ingrese el autor del libro " + i + ":");
  let año = parseInt(prompt("Ingrese el año del libro " + i + ":"));
  pila.push({ titulo: titulo, autor: autor, año: año });
}
console.log("Pila con 3 libros:");
for (let i = pila.length - 1; i >= 0; i--) {
  console.log(pila[i].titulo + " (" + pila[i].año + ")");
}

//eliminar el último libro (pop)
if (pila.length > 0) {
  let eliminado = pila.pop();
  console.log("7. Libro eliminado con pop(): " + eliminado.titulo);
} else {
  console.log("7. No se puede eliminar, la pila está vacía.");
}

//ver el libro en la cima
if (pila.length > 0) {
  let cima = pila[pila.length - 1];
  console.log("8. Libro en la cima: " + cima.titulo);
} else {
  console.log("8. No hay libros en la pila.");
}

//verificar si la pila está vacía (isEmpty)
if (pila.length === 0) {
  console.log("9. La pila está vacía.");
} else {
  console.log("9. La pila tiene " + pila.length + " libros.");
}

//vaciar completamente la pila
while (pila.length > 0) {
  pila.pop();
}
console.log("10. La pila se ha vaciado completamente.");