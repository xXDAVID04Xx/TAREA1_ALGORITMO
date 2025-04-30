//Calculadora de sueldo con aumento: Pide al usuario que ingrese su salario actual y el 
//porcentaje de aumento que recibirá. Calcula y muestra el nuevo salario después del aumento.
Algoritmo calculadora
	Definir salario, porce, aumento, nuevosalario Como Real
	Escribir "Ingrese su salario actual"
	leer salario
	Escribir "Ingrese su porcentaje de aumento"
	leer porce
	aumento= salario * (porce / 100)
	nuevosalario= salario * aumento
	Escribir "Su nuevo salario después del aumento es el siguiente: " , nuevosalario
FinAlgoritmo
