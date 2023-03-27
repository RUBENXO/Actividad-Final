/*Crear un algoritmo que pida dos números enteros por teclado e imprima:
• si los números son iguales, imprimir el mensaje” los valores son
iguales” y la suma de ambos
• Si el número 1 es mayor al número 2, imprimir que el “número1 es
mayor” y resultado de la división entre ambos.
• Si el numero1 es menor al número2, imprimir que el “número 1 es
menor” y el resultado de la multiplicación entre ambos.
(Este algoritmo se desarrolla con el condicional if).*/

let cachama = parseInt(prompt("Digite un número entero"))
let bocachico = parseInt(prompt("Digite otro número entero"))

if(cachama == bocachico){
    alert("Los valores son iguales, el resultado de la suma es: " + " " + (cachama+bocachico))
}else if (cachama > bocachico){
    alert("El primer valor es mayor, el resultado de la división es: " + " " + cachama/bocachico)
}else if (cachama < bocachico){
    alert("El primer valor es menor, el resultado de la multiplicación es: " + " " + cachama*bocachico)
}