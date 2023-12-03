/*Scriviamo delle funzioni con due numeri
una controlla che il primo sia maggiore o uguale
una controlla che il primo sia divisibile per il secondo senza resto! (un classico, un pizzico più difficile)
Infine 
una funzione che controlli che un numero sia pari

Scriviamo una funzione che accetta due callback e ne esegua una in base alla veridicità della condizione passata come primo argomento ritornando il risultato della callback eseguita

function myFunc(condition, callbackTrue, callbackFalse)

utilizzando ciò che sappiamo fino ad ora :) 
no cose nuove*/

//primo divisibile per il secondo senza resto
function divisibile(num1,num2) {
    resto= num1%num2
    return resto===0
}
console-log(divisibile(6,3))

//numero pari
function pari(numero) {
    resto= numero%2
    return resto===0
}

//callback ma in realtà l'ho sbagliata lol
function MaggMinCallback(numero1,numero2) {
    variabile=numero1>numero2
    return variabile ? "il primo numero è maggiore" : "il secondo numero è maggiore"
}

/*oggetto
- age  ( number )
- hobbies ( array di oggetti con proprietà name ( string) ,  from ( numero)
- myFavouriteBook (oggetto con proprietà title, pages, isLiked(boolean)*/

const Giusy = {
    age: 26,
    hobbies: [
        {name: "reading", from: 2000},
        {name: "crochet", from: 2020},
        {name: "collecting", from: 2015}
    ],
    myFavouriteBook: {title: "guida galattica per autostoppisti",
                      pages: 300,
                      isLiked: true}
}