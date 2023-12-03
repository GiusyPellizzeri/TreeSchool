//aggiungere un elemento

//inserire una lista quindi tag ul e vari li
addList = function (){
    //creo tag
    let ul = document.createElement("ul")
    let li1 = document.createElement("li")
    let li2 = document.createElement("li")
    let li3 = document.createElement("li")
    //inserisco i dati
    li1.textContent = "primo elemento"
    li2.textContent = "secondo elemento"
    li3.textContent = "terzo elemento"
    //metto li dentro ul
    ul.append(li1,li2,li3)
    //inserisco nella pagina
    document.getElementById("list").append(ul)
}

addList()

//aggiungere una classe

addClass = function (){
    let list = document.getElementById("list")
    //stampo i nomi tutte le classi
    list.classList.forEach(
        el => console.log(el)

    )
    //aggiungere classe
    list.classList.add("esempioAdd")

    //aggiungo classe ai figli

    //stampo tutti i fligli
    let listChildren = list.childNodes
    console.log(listChildren)
    /*child nodes restituisce un array quindi posso identificare
    un figlio specifico tramite l'indice*/
    listChildren[0].classList.add("prova")
}

addClass()

//aggiungere div

addDiv = function(){
    let div=document.createElement("div")
    let p = document.createElement("p")
    p.textContent = "ciao"
    div.appendChild(p)
    document.getElementById("testID").append(div)
}

addDiv()

