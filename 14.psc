//pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo
Algoritmo ejercicio
	Definir nombre1, nombre2 como cadena
	Escribir "ingresa un nombre"
	leer nombre1
	Escribir "ingresa otro nombre"
	leer nombre2
	nombre1= Minusculas(nombre1)
	nombre2= Minusculas(nombre2)
	si nombre1 = nombre2 Entonces
		Escribir "tus nombres son iguales"
	SiNo
		si nombre1 > nombre2 Entonces
			Escribir "el primer nombre es mayor alfabeticamente que el segundo"
		SiNo
			Escribir "el primer nombre es menor alfabeticamente que el segundo"
		FinSi
	FinSi
	
FinAlgoritmo
