//El banco POO ha decidido aumentar el límite de crédito de las tarjetas de crédito de sus clientes, para esto considera que: 
//Si su cliente tiene tarjeta tipo 1, el aumento será del  $100 .
//Si tiene tipo 2 el aumento será del $200 
//Si tiene tipo 3, el aumento será del $300 
//Para cualquier otro tipo será del 500 
//Se pide realizar un algoritmo que ayude al banco a determinar el nuevo límite de crédito que tendrá una persona en su tarjeta
//considerando que después del aumento se tendrá que subir 10% adicionales a todas las tarjetas
Algoritmo banco
	Definir tarjetas Como Entero
	Definir limiteAct, limiteNue, aumentoI, aumentototal Como Real
	Escribir "Ingrese que tipo de tarjeta usted tiene ya sea 1,2,3 o de algún otro tipo"
	leer tarjetas
	Escribir "Ingrese el limite actual de su tarjeta de crédito"
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
	Escribir "El nuevo límite de su tarjeta de crédito es: " , limiteNue

		
	
FinAlgoritmo
