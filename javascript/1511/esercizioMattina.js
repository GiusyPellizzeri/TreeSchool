/*Crea una pagina HTML con diversi elementi (div o paragrafi).
Implementa la logica JavaScript per cambiare il colore di sfondo di ciascun elemento 
quando il mouse passa sopra e ripristinarlo quando il mouse esce.*/

let div1 = document.getElementById("div1")
let div2 = document.getElementById("div2")
let div3 = document.getElementById("div3")

div1.onmouseover = function(){
    div1.style.backgroundColor = "pink"
}

div2.onmouseover = function(){
    div2.style.backgroundColor = "lightblue"
}

div3.onmouseover = function(){
    div3.style.backgroundColor = "lightgreen"
}

div1.onmouseout = function(){
    div1.style.backgroundColor = ""
}

div2.onmouseout = function(){
    div2.style.backgroundColor = ""
}

div3.onmouseout = function(){
    div3.style.backgroundColor = ""
}

/*Crea una pagina HTML con un pulsante e un contatore inizialmente impostato a zero.
Implementa la logica JavaScript per incrementare il valore del contatore 
ogni volta che il pulsante viene cliccato.*/

let indice = 0

function incremento(){
    indice++
    document.getElementById("numero").innerText = indice
}

function riduci(){
    indice--
    document.getElementById("numero").innerText = indice
}

/*Crea una pagina HTML con una lista di numeri.
Aggiungi due pulsanti: 
uno per ordinare i numeri in ordine crescente
e un altro per ordinarli in ordine decrescente.
Implementa la logica JavaScript per ordinare dinamicamente i numeri quando i pulsanti vengono cliccati.*/

let arrayElenco = document.getElementById("lista").children

elenco =[]
for(i=0; i<arrayElenco.length; i++){
    elemento = document.getElementById("elemento"+i).innerText
    elenco.push(elemento)
}

function crescente(){
    let elencoCrescente = elenco.sort()
    for(i=0; i<arrayElenco.length; i++){
        document.getElementById("elemento"+i).innerText = elenco[i]
    }
}

function decrescente(){
    let elencoCrescente = elenco.sort().reverse()   
    for(i=0; i<arrayElenco.length; i++){
        document.getElementById("elemento"+i).innerText = elenco[i]
    }    
}