/*Dato il seguente array [3,2,31,23,4]
Visualizzare il primo e l’ultimo elemento.
Aggiungere gli elemento 21,7,4;
Stampare tutti i numeri pari;
Eliminare l’elemento con valore 2.*/
console.log("ESERCIZIO 1")

let vettore = [3,2,31,23,4];
console.log(vettore)
console.log("primo elemento " + vettore[0]);
console.log("ultimo elemento " + vettore[vettore.length-1])
// aggiungo elementi
vettore.push(21,7,4)
console.log(vettore)
//stampo i numeri pari
for (i=0; i < vettore.length; i++){
    if (vettore[i]%2 == 0){console.log(vettore[i])}
}
//elimino il 2
vettore.splice(vettore.indexOf(2),1)
console.log(vettore)
//va bene perchè so che ne ho solo 1, altrimenti usavo un ciclo for

/*Dato il seguente array ["gatto", "cane", "renna", "pinguino", "coccodrillo"]:
Stampare tutte le parole con doppie consonanti (ad esempio renna);
Aggiungere altri tre animali.
Sommare tutte le lettere dell’array.*/
console.log("\n ESERCIZIO 2")
//copiato da lei, rifare
let arrayStringhe = ["gatto", "cane", "renna", "pinguino", "coccodrillo"];

for(let i = 0; i < arrayStringhe.length; i++){
    let elemento = arrayStringhe[i];
    if(verificaDoppie(elemento)){
        console.log("Doppie in parola:" , elemento);
    }
}

function verificaDoppie(elem){
    for(let j = 0; j < elem.length-1; j++){
        if(elem[j] == elem[j+1]){
            return true;
        }
    }
    return false;
}

arrayStringhe.push("leone", "farfalla", "tigre")
console.log(arrayStringhe.join("").length)