//Una tienda en línea "AlgoritmoX", ha decidido ajustar los límites de descuento para diferentes tipos de clientes
//con el objetivo de aumentar las ventas. El descuento actual para todos los clientes es de 10%.
//La política de ajuste de límites de descuento es la siguiente: 
//Si un cliente pertenece al tipo A o es discapacitado, el aumento en el límite de descuento será un 20% sumado al valor que tiene. 
// Si pertenece al tipo B y no es discapacitado, el aumento será un 15% sumado al valor que tiene. 
//Para clientes del tipo C, el aumento será un 10% sumado al valor que tiene. 
//Para cualquier otro tipo de cliente, no habrá aumento de descuento.
Algoritmo ejercicio
	Definir nombre, tipo, discapacidad Como Caracter
	Definir totalventa, porcentajedes, valordesc, valoriva, totalpagar Como Real
	Escribir "Ingrese el nombre del cliente"
	leer nombre
	Escribir "Ingrese el tipo de cliente A, B, C, Otro"
	leer tipo
	Escribir "¿El cliente tiene algún tipo de discapacidad?"
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
