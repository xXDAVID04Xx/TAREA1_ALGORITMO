//Pedir al usuario el monto total de una factura y el año de la  compra. Luego, calcular y mostrar el monto total a pagar  
//incluyendo el IVA. Si el año de la compra es menor al 2024 el porcentaje del IVA es del 12% caso contrario aplicar 
//el IVA del 15%. 
Algoritmo ejercicio
	Definir monto, montofinal, iva Como Real
	Definir anio Como Entero
	Escribir "Ingrese el monto total de la factura"
	leer monto
	Escribir "Ingrese el año de la compra"
	leer anio
	si anio < 2024 Entonces
		iva = 0.12
	SiNo
		iva = 0.15
	FinSi
	montofinal = monto + (monto * iva)	
	Escribir " El monto total a pagar incluyendo el iva es: " , montofinal
FinAlgoritmo
