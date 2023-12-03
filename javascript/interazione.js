//10-11-23

//MODIFICA IL TITOLO CON ID "titolo"

function modificaTesto(){
    document.getElementById("titolo").innerText = "Nuovo testo modificato"
}

//AGGIUNGERE ED ELIMINARE ELEMENTI DI UNA LISTA

function aggiungiElemento(){
    let lista = document.getElementById("lista")
    let elemento = document.createElement("li").textContent = "nuovo elemento"
    lista.appendChild(elemento)
}

function rimuoviElemento(){
    let lista = document.getElementById("lista")
    let ultimo = lista.lastElementChild
    lista.removeChild(ultimo)
}


