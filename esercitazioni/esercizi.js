/*Esercizio 1: Stampa numeri pari
Scrivi un programma che utilizzi un ciclo for per stampare tutti i numeri pari da 1 a 20.*/
console.log("ESERCIZIO 1")

for(i=0; i<=20; i=i+2){
    console.log(i)
}

/*Esercizio 2: Somma degli elementi di un array
Scrivi una funzione che accetti un array di numeri come argomento 
e restituisca la somma di tutti gli elementi nell'array.*/
console.log("ESERCIZIO 2")

let array = [2,9,3,7,3,4,15,78,3]

let somma = array.reduce((prec,succ)=>prec+succ)
console.log(somma)

/*Esercizio 3: Tabellina del 7
Scrivi un programma che utilizzi un ciclo for per stampare la tabellina del 7 (da 1 a 10).*/
console.log("ESERCIZIO 3")

for(i=1; i<=10; i++){
    console.log(i,"x 7 =",i*7)
}

/*Esercizio 4: Calcola il fattoriale
Scrivi una funzione che accetti un numero intero come argomento e restituisca il suo fattoriale. 
Il fattoriale di un numero n è il prodotto di tutti i numeri interi positivi da 1 a n.*/
console.log("ESERCIZIO 4")

function fatt(num){
    let fattoriale = num
    for(j=1; j<num; j++){
        fattoriale = fattoriale*(num-j)
    }
    return fattoriale
}

console.log(fatt(5))

/*Esercizio 5: Trova il numero maggiore
Scrivi una funzione che accetti un array di numeri come argomento e 
restituisca il numero più grande presente nell'array.*/
console.log("ESERCIZIO 5")

let array2 = [2,9,23,7,34,4,15,78,3]

function maggiore(myArray){
    let maggiore = 0
    for(k=0; k < myArray.length; k++){
        if(myArray[k]>maggiore){maggiore = myArray[k]}
    }
    return maggiore
}

console.log(maggiore(array2))

/*Esercizio 6: Stampa un triangolo
Scrivi un programma che utilizzi un ciclo for per stampare un triangolo di asterischi. 
Il numero di righe del triangolo dovrebbe essere specificato come argomento della funzione.*/
console.log("ESERCIZIO 6")

/*Esercizio 7: Conta le vocali
Scrivi una funzione che accetti una stringa come argomento e 
restituisca il numero di vocali presenti nella stringa.*/
console.log("ESERCIZIO 7")

/*Esercizio 8: Inverti una stringa
Scrivi una funzione che accetti una stringa come argomento e restituisca la stringa invertita. 
Ad esempio, se la stringa è "ciao", la funzione dovrebbe restituire "oaic".*/
console.log("ESERCIZIO 8")
