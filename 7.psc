//Escribir un algoritmo que lea cuatro números y determine si el numero 1 es divisor 
//del numero 3 Y si el numero 2 es el doble del numero 4. 
Algoritmo calcular
	Definir num1, num2, num3, num4 Como real
	Escribir "Ingrese el primero número"
	leer num1
	Escribir "Ingrese el segundo número"
	leer num2
	Escribir "Ingrese el tercer número"
	leer num3
	Escribir "Ingrese el ultimo número"
	leer num4
	si num3 mod num1 = 0 Entonces
		Escribir "El primer número es divsor del tercer número" 
	SiNo
		Escribir "El primer número no es divisor del tercer número"
	FinSi
	si num2= 2 * num4 Entonces
		Escribir "Su segundo número es el doble del último número"
	SiNo
		Escribir "Su segundo número no es el doble del último número"
	FinSi
	
	
	 
FinAlgoritmo
