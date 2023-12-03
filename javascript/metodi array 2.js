let array = [1, 2, 3, 45, 6, 77, 8, 9, 10]

//moltiplicare tutti x5 e inserire l'array in uno nuovo
let arrayMolt5 = array.map(elemento =>elemento*5)
console.log(arrayMolt5)

//filtrare gli elementi tra 5 e 2
let arrayFiltrato = array.filter(elemento => (elemento>2, elemento<5))
console.log(arrayFiltrato)

//sommiamo gli elementi dell'array
let arraySomma = array.reduce((elemento1,elemento2) => elemento1 + elemento2)
console.log(arraySomma)

//ottenere il primo elemento maggiore di 18
let arrayMagg18 = array.find(elemento =>elemento>=18)
console.log(arrayMagg18)

//leggere la data e mostrare un messaggio 00-14 buon giorno 14-20 buon pomeriggio 20-24 buonasera

var data = new Date().getHours()
if (data>0o0, data<=14){console.log("buon giorno")}
else if (data>14, data<=20){console.log("buon pomeriggio")}
else {console.log("buona sera")}

//crea una funzione che trasforma l'intervallo 1-5 da numeri a lettere

function decode (num){
    let messaggio;
    if(num===1){messaggio = "A"}
    else if(num===2){messaggio = "B"}
    else if(num===3){messaggio = "C"}
    else if(num===4){messaggio = "D"}
    else if(num===5){messaggio = "E"}
    else {console.log("numero non valido")}
    return console.log(messaggio)
}

decode(1)

//creare una calcolatrice
//funzione con 3 input: tipo di operazione e i due numeri. restituisce il risultato e lo stampa a video

function operazioni (operatore,numero1,numero2){
    let result;
    if (operatore === "+"){result = numero1+numero2}
    else if (operatore === "-"){result = numero1-numero2}
    else if (operatore === "*"){result = numero1*numero2}
    else if (operatore === "/"){result = numero1/numero2}
    else {console.log("operatore non valido")}
    return console.log(numero1, operatore, numero2, "=", result)
}

operazioni("+",6,3)