/*//dati due numeri 9 e 11 stampare la loro somma
let numero1 = 9;
let numero2 = 11;
console.log(numero1 + numero2);

//data la stringa "il mio primo esercizio in javascript" stamparla tutta in maiuscolo
let stringa = "il mio primo esercizio in javascript"
console.log(stringa.toUpperCase())

//data la stringa "javascript è case-sensitive" stamparne la lunghezza
let stringa2 = "Javascript è case-sensitive"
console.log(stringa2.length)

//data la stringa "italia" stampare il primo e l'ultimo carattere
let stringa3 = "italia"
let primo = stringa3.charAt(0)
let ultimo = stringa3.charAt(stringa3.length-1)
console.log("primo carattere: " + primo + " ultimo carattere: " + ultimo)

//date due stringhe "roma" e "catania" sommare le loro lunghezze
let stringaR = "roma"
let stringaC = "catania"
console.log(stringaR.length + stringaC.length)

//data la stringa "pizza" stampare la sottostringa che va dal secondo carattere fino alla fine
let stringa4 = "pizza"
console.log(stringa4.substring(1))
*/
//Definiamo una variabile a cui assegniamo il valore 100. Sottraiamo il numero 3 per 10 volte.
console.log("esercizio 1")

let variabile = 100;
for(let i=0; i<10; i++){
    variabile -= 3;    
}
console.log(variabile)

//Date due stringhe "Leone"  e "Leotta"  
//verificare se esistono lettere uguali ovvero stesso valore, stesso tipo (maiuscolo o minuscolo) e stessa posizione.
console.log("esercizio 2")

let strin1 = "Leone";
let strin2 = "Leotta";
let i = 0;
while(i<strin2.length){
    if(strin1[i]===strin2[i]){
        console.log(strin1[i])
    } else {continue}
    i++
}

//Trovare i primi 15 numeri multipli di 3. 
//Attenzione: 1. utilizzare un solo ciclo; 
//2. le variabili non devono essere create esternamente al ciclo
console.log("esercizio 3")

for(let i=0; i<15; i++){
    let modulo = i%3;
    if(modulo==0){
        console.log(i)
    } else {continue}
}

//Stampare i primi 20 numeri pari (usare solo un ciclo).
console.log("esercizio 4")

for(i=0;i<40;i=i+2){
    console.log(i)
}