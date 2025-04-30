//El banco POO ha decidido aumentar el l�mite de cr�dito de las tarjetas de cr�dito de sus clientes, para esto considera que: 
//Si su cliente tiene tarjeta tipo 1, el aumento ser� del  $100 .
//Si tiene tipo 2 el aumento ser� del $200 
//Si tiene tipo 3, el aumento ser� del $300 
//Para cualquier otro tipo ser� del 500 
//Se pide realizar un algoritmo que ayude al banco a determinar el nuevo l�mite de cr�dito que tendr� una persona en su tarjeta
//considerando que despu�s del aumento se tendr� que subir 10% adicionales a todas las tarjetas
Algoritmo banco
	Definir tarjetas Como Entero
	Definir limiteAct, limiteNue, aumentoI, aumentototal Como Real
	Escribir "Ingrese que tipo de tarjeta usted tiene ya sea 1,2,3 o de alg�n otro tipo"
	leer tarjetas
	Escribir "Ingrese el limite actual de su tarjeta de cr�dito"
	leer limiteAct
	si tarjetas = 1 Entonces
		aumentoI = 100
	SiNo
		si tarjeta = 2 Entonces
			aumentoI = 200
		SiNo
			si tarjeta = 3 Entonces
				aumentoI = 300
			SiNo
				aumentoI = 500
			FinSi
		FinSi
	FinSi
	limiteNue = limiteAct + aumentoI
	aumentototal = limiteNue * 0.10
	limiteNue = limiteNue + aumentototal
	Escribir "El nuevo l�mite de su tarjeta de cr�dito es: " , limiteNue

		
	
FinAlgoritmo
