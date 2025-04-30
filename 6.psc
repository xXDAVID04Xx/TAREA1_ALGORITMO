//Escribir un algoritmo que lea cuatro números y determine si el número 1 es la mitad del número 2;
// Y si el número 3 es divisor del número 4
Algoritmo divisor
	Definir num1, num2, num3, num4 Como real
	Escribir "Ingrese el primero número"
	leer num1
	Escribir "Ingrese el segundo número"
	leer num2
	Escribir "Ingrese el tercer número"
	leer num3
	Escribir "Ingrese el ultimo número"
	leer num4
	si num1 = num2 / 2 Entonces
		Escribir "Su primer número es la mitad del segundo"
	SiNo
		Escribir "Su primer número no es la mitad del segundo"
		si num3 mod num4 = 0 Entonces
			Escribir "El tercer número es divisor del cuarto"
		SiNo
			Escribir "El tercer número no es divisor del cuarto"
		FinSi
	FinSi
	
FinAlgoritmo
