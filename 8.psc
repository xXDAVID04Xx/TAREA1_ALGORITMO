//Pedir al usuario un número y mostrar si es negativo menor que -20, sino mostrar si 
//es positivo par o impar múltiplo de 7. 
Algoritmo ejercicio 
	Definir num1 Como real
	Escribir "Ingrese un número"
	leer num1
	si num1 < -20 Entonces
		Escribir "Su número es es negativo y menor que -20"
	SiNo
		si num1 > 0 Entonces
			si num1 mod 2 = 0 Entonces
				Escribir "El número es positivo y par"
			SiNo
				Escribir "El número es positivo e impar"
			FinSi
			si num1 mod 7 = 0 Entonces
				Escribir "El número también es multiplo de 7"
			SiNo
				Escribir "El número no es multiplo de 7"
			FinSi
		SiNo
			Escribir "El número no es positivo ni es menor que -20"
		FinSi
		
	FinSi
	
		
			
		
	
FinAlgoritmo
