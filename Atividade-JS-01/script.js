

document.getElementById("showButton").innerText = "Mostrar"

let button = true
let number = 0

function click(){
    button = !button
    console.log(button)

    if (button === true){
        document.getElementById("showButton").innerText = "Mostrar"
        document.getElementById("listNumbers").innerHTML = ""
    }else{
         document.getElementById("showButton").innerText = "Ocultar"
         document.getElementById("listNumbers").innerHTML += number + "<br>"
     }
}

function showNumbers() {
    
    document.getElementById("showButton").innerText = "Ocultar"

    for (number = 1; number <= 10; number++){
        document.getElementById("listNumbers").innerHTML += number + "<br>"
    }
    click()
}

// Tabela
let tabela = prompt("Digite seu número")
tabela = parseInt(tabela)

for (i = 0; i <= 10; i++){
    resultado = tabela * i
    console.log(resultado)

    document.getElementById("resultadoTabela").innerHTML += tabela + " * " + i + " = " + resultado + "<br>"
}



