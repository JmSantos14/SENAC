// let numero1 = prompt("Digite o primeiro valor")
// let numero2 = prompt("Digite o segundo valor")

// numero1 = parseInt(numero1)
// numero2 = parseInt(numero2)


// document.getElementById("valor1").innerText = "Primeiro numero é: " + numero1
// document.getElementById("valor2").innerText = "Segundo numero é: " + numero2

// const soma = (numero1 + numero2);
// document.getElementById("resultadoSoma").innerText = "A soma é: " + soma


// const minus = numero1 - numero2;
// document.getElementById("resultadoMinus").innerText = "A subtracao é: " + minus


// const mult = numero1 *  numero2;
// document.getElementById("resultadoMult").innerText = "A Multiplicacao é: " + mult


// const div = numero1 / numero2;
// document.getElementById("resultadoDiv").innerText = "A Divisao é: " + div

// document.getElementById("resultadoDiv").style.color = "red"



let nota = prompt("Digite sua nota")

nota = parseFloat(nota)

if (nota <= 5){ 
    document.getElementById("nota").innerText = "Reprovado"
}
else if (nota > 5 && nota <= 6.9){
    document.getElementById("nota").innerText = "Recuperação"
}
else{
    document.getElementById("nota").innerText = "Aprovado"
}


