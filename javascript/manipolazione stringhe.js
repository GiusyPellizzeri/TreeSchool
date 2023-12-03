let gatti = ["romeo", "figaro", "luna", "artemis"]
console.log(gatti)

//scriviamo una funzione che prende un array di 4 stringhe e crea un nuovo array
//che contenga 1 posizione unione prime due stringhe con separatore -
//2 posizione unione delle altre 2 stringhe con separatore *
console.log("\n L'UNIONE")

function unione(gatti){
    firstString = [gatti[0], gatti[1]].join("-")
    secondString = [gatti[2], gatti[3]].join("*")
    return [firstString, secondString].join("^")
}
console.log(unione(gatti))

//tutto in una riga tanto per divertimento
//console.log([[gatti[0],gatti[1]].join("-"),[gatti[2],gatti[3]].join("*")].join("^"))

//scriviamo una funzione con argomento un array di stringhe e ritorna un nuovo array
//tagliato il primo e l'ultimo elemento dell'array originale
console.log("\n LO SMONTATORE")

//versione 1: a mano
function smontatore1(gatti){
    return [gatti[1],gatti[2]]
}
console.log(smontatore1(gatti))
console.log(gatti)

//versione 2: col ciclo (non funziona, lo sovrascrive, ma c'è nell'esercizio dopo)
/*function smontatore2(gatti){
    for(i=1; i < gatti.length-1; i++){
        nuoviGatti = [gatti[i]]
    }
    return nuoviGatti
}
console.log(smontatore2(gatti))
console.log(gatti)*/

//versione 3: con shift e pop
function smontatore3(gatti){
    nuovoArray = gatti.concat([])
    nuovoArray.shift()
    nuovoArray.pop()
    return nuovoArray
}
console.log(smontatore3(gatti))
console.log(gatti)

//scrivi un funzione che ha come argomento un array di 10 stringhe,
//crea un array con le stringhe con indici pari
//da questo un nuovo array taglio il primo e l'ultimo
console.log("\n LO SMONTATORE FOLLE")

gatti.push("gatto4", "gatto5", "gatto6", "gatto7", "gatto8", "gatto9")
//console.log(gatti.length)

//non ha funzionato bene, lo faccio insieme a riccardo
/*let nuoviGatti=[]
console.log("nuovi gatti prima:", nuoviGatti)
for(k=0; k < gatti.length; k++){
    if(k%2 == 0){
        console.log(gatti[k])
        nuoviGatti=[gatti[k]]
    }
}
console.log("nuovi gatti dopo:", nuoviGatti)*/

function madManipulator(myArray){
    let newArray = []
    for (let j=0; j < myArray.length; j++){
        if (j%2 === 0) {newArray.push(myArray[j])}
    }
    console.log(newArray)
    newArray.shift()
    newArray.pop()
    return newArray
}
//console.log(gatti)
console.log(madManipulator(gatti))

//metodo alternativo con concat invece che push
function madManipulator(myArray){
    let newArray = []
    for (let j=0; j < myArray.length; j++){
        if (j%2 === 0) {
 //           newArray.push(myArray[j])
            newArray = newArray.concat( [ myArray[j] ] )
        }
    }
    console.log(newArray)
    newArray.shift()
    newArray.pop()
    return newArray
}

