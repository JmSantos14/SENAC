let numero1 = prompt("Digite o primeiro valor")
let numero2 = prompt("Digite o segundo valor")

numero1 = parseInt(numero1)
numero2 = parseInt(numero2)


document.getElementById("valor1").innerText = "Primeiro numero é: " + numero1
document.getElementById("valor2").innerText = "Segundo numero é: " + numero2

const soma = (numero1 + numero2);
document.getElementById("resultadoSoma").innerText = "A soma é: " + soma


const minus = numero1 - numero2;
document.getElementById("resultadoMinus").innerText = "A subtracao é: " + minus


const mult = numero1 *  numero2;
document.getElementById("resultadoMult").innerText = "A Multiplicacao é: " + mult


const div = numero1 / numero2;
document.getElementById("resultadoDiv").innerText = "A Divisao é: " + div