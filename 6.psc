//Escribir un algoritmo que lea cuatro n�meros y determine si el n�mero 1 es la mitad del n�mero 2;
// Y si el n�mero 3 es divisor del n�mero 4
Algoritmo divisor
	Definir num1, num2, num3, num4 Como real
	Escribir "Ingrese el primero n�mero"
	leer num1
	Escribir "Ingrese el segundo n�mero"
	leer num2
	Escribir "Ingrese el tercer n�mero"
	leer num3
	Escribir "Ingrese el ultimo n�mero"
	leer num4
	si num1 = num2 / 2 Entonces
		Escribir "Su primer n�mero es la mitad del segundo"
	SiNo
		Escribir "Su primer n�mero no es la mitad del segundo"
		si num3 mod num4 = 0 Entonces
			Escribir "El tercer n�mero es divisor del cuarto"
		SiNo
			Escribir "El tercer n�mero no es divisor del cuarto"
		FinSi
	FinSi
	
FinAlgoritmo
