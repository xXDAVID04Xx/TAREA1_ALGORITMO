//Pedir al usuario un n�mero y mostrar si es negativo menor que -20, sino mostrar si 
//es positivo par o impar m�ltiplo de 7. 
Algoritmo ejercicio 
	Definir num1 Como real
	Escribir "Ingrese un n�mero"
	leer num1
	si num1 < -20 Entonces
		Escribir "Su n�mero es es negativo y menor que -20"
	SiNo
		si num1 > 0 Entonces
			si num1 mod 2 = 0 Entonces
				Escribir "El n�mero es positivo y par"
			SiNo
				Escribir "El n�mero es positivo e impar"
			FinSi
			si num1 mod 7 = 0 Entonces
				Escribir "El n�mero tambi�n es multiplo de 7"
			SiNo
				Escribir "El n�mero no es multiplo de 7"
			FinSi
		SiNo
			Escribir "El n�mero no es positivo ni es menor que -20"
		FinSi
		
	FinSi
	
		
			
		
	
FinAlgoritmo
