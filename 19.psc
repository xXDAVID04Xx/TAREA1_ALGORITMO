//Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando que la nota m�nima 
//de aprobaci�n es 60 puntos. Si la nota es mayor a 40 y menor a 60 se queda para recuperaci�n caso contario pierde la materia.
Algoritmo notas
	Definir nota Como Entero
	Escribir "Ingrese la nota de su examen"
	leer nota
	si nota >= 60 Entonces
		Escribir "Usted ha aprobado"
	SiNo
		si nota > 40 Entonces
			Escribir "Usted tiene que dar recuperaci�n"
		SiNo
			Escribir "Usted a perdido la materia"
		FinSi
	FinSi
	
FinAlgoritmo
