//Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. 
//Calcular y mostrar el precio final luego de aplicar el descuento siempre cuando el precio sea mayor $100
Algoritmo ejercicio
	Definir precio, porcentajedes, descuento, preciofinal Como Real
	Escribir "Ingrese el precio del producto"
	leer precio
	Escribir "Ingrese el porcentaje de descuento aplicado"
	leer porcentajedes
	si precio > 100 Entonces
		descuento = precio * (porcentajedes / 100)
		preciofinal = precio - descuento
		Escribir "El precio final despues de aplicar el descuento es de: " , preciofinal
	FinSi
	
FinAlgoritmo
