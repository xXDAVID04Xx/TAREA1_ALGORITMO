//Escribir un algoritmo que lea cuatro n�meros y determine si el numero 1 es divisor 
//del numero 3 Y si el numero 2 es el doble del numero 4. 
Algoritmo calcular
	Definir num1, num2, num3, num4 Como real
	Escribir "Ingrese el primero n�mero"
	leer num1
	Escribir "Ingrese el segundo n�mero"
	leer num2
	Escribir "Ingrese el tercer n�mero"
	leer num3
	Escribir "Ingrese el ultimo n�mero"
	leer num4
	si num3 mod num1 = 0 Entonces
		Escribir "El primer n�mero es divsor del tercer n�mero" 
	SiNo
		Escribir "El primer n�mero no es divisor del tercer n�mero"
	FinSi
	si num2= 2 * num4 Entonces
		Escribir "Su segundo n�mero es el doble del �ltimo n�mero"
	SiNo
		Escribir "Su segundo n�mero no es el doble del �ltimo n�mero"
	FinSi
	
	
	 
FinAlgoritmo
