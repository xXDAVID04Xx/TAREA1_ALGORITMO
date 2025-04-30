//Una tienda en l�nea "AlgoritmoX", ha decidido ajustar los l�mites de descuento para diferentes tipos de clientes
//con el objetivo de aumentar las ventas. El descuento actual para todos los clientes es de 10%.
//La pol�tica de ajuste de l�mites de descuento es la siguiente: 
//Si un cliente pertenece al tipo A o es discapacitado, el aumento en el l�mite de descuento ser� un 20% sumado al valor que tiene. 
// Si pertenece al tipo B y no es discapacitado, el aumento ser� un 15% sumado al valor que tiene. 
//Para clientes del tipo C, el aumento ser� un 10% sumado al valor que tiene. 
//Para cualquier otro tipo de cliente, no habr� aumento de descuento.
Algoritmo ejercicio
	Definir nombre, tipo, discapacidad Como Caracter
	Definir totalventa, porcentajedes, valordesc, valoriva, totalpagar Como Real
	Escribir "Ingrese el nombre del cliente"
	leer nombre
	Escribir "Ingrese el tipo de cliente A, B, C, Otro"
	leer tipo
	Escribir "�El cliente tiene alg�n tipo de discapacidad?"
	Leer discapacidad
	Escribir "Ingrese el total de la venta"
	leer totalventa
	porcentajedes = 10
	si tipo = "A" o discapacidad = "Si" Entonces
		porcentajedes = porcentajedes + 20
	SiNo
		si tipo = "B" y discapacidad = "No" Entonces
			porcentajedes = porcentajedes + 15
		SiNo
			si tipo = "C" Entonces
				porcentajedes = porcentajedes + 10
			FinSi
		FinSi
	FinSi
	valordesc = totalventa * (porcentajedes / 100)
	ventacondescuento= totalventa - valordesc
	valoriva= ventacondescuento + 15 / 100
	totalpagar = ventacondescuento + valoriva
	Escribir "Nombre del cliente " , nombre
	Escribir "Total de la venta: $" , totalventa
	Escribir "Porcentaje de descuento: " , porcentajedes
	Escribir "Valor de descuento: $" , valordesc
	Escribir "Valor del iva (15%): $" , valoriva
	Escribir "Total a pagar: $" , totalpagar
		
	
	
FinAlgoritmo
