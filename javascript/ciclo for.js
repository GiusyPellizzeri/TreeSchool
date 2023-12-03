console.log("ESERCIZIO 1")
// crea un array e stampa solo i nomi più lunghi di 10

const nomi =["giusy", "giada", "mariangela", "mario", "beatrice", "riccardo", "nonnetrovoaltripiùdi10"]
for(let i = 0; i < nomi.length; i++){
    if(nomi[i].length >= 10){
        console.log(nomi[i])
    } else {continue}
}

console.log("ESERCIZIO 2")
//scrivi un ciclo di numeri da 1 a 100.
// se multiplo di 3 stampa FIZZ, se multiplo di 5 stampa BUZZ, se multiplo di entrambi FIZZBUZZ

for (let j =1; j <= 100; j++){
    if (j%3 === 0 && j%5 === 0) {console.log(j + " FizzBuzz")}
    else if (j%3 === 0) {console.log(j + " Fizz")}
    else if (j%5 === 0) {console.log(j + " Buzz")}
    else {console.log(j)}
}

// name age month
// <18 esci per limiti di età
// >60 esci 
// costo 500 se inizia r sconto 20%
console.log("ESERCIZIO 3")

const clienti = [
    {nome: "giusy", età: 26}, {nome: "riccardo", età: 37}, 
    {nome: "francesca", età: 67}, {nome: "rebeccca", età: 14}
]

for (let k = 0; k < clienti.length; k++) {
    if (clienti[k].età < 18 || clienti[k].età > 60) {console.log(clienti[k].nome + " hai raggiunto il limite di età")}
    else if (clienti[k].nome.startsWith("r")) {console.log(clienti[k].nome + " la patente costa €500 ma hai uno sconto del 20%")}
    else {console.log(clienti[k].nome + " la patente costa €500")}
}