//JAVASCRIPT

//per inserire codice javascript nel html uso il tag <script>
//script interno => scrivo il codice all'interno del tag
//script esterno => scrivo il codice in un altro file e lo collego con l'attributo "src"

//VARIABILI//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//sono dei contenitori in cui posso immagazzinare i miei elementi e usarli con facilità
//posso mettere qualsiasi tipo di dato ed essendo javascript weakly typed posso anche cambiare il tipo di dato in corso d'opera

var nomeVariabile; //dichiarazione
nomeVariabile = "ciao" //assegnazione

var altraVariabile = 26 //dichiarazione e assegnazione

//se la variabile la dichiaro senza assegnarla avrà valore undefined

var variabileGenerale = "si usa raramente e in casi particolari, meglio evitare"
let variabileMutevole = "questa è quella che bisogna usare"
const costante = "il nome parla da sè, è un valore che rimane costante"

//FUNZIONI/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//permettono di incapsulare azioni in un blocco di codice che posso riutilizzare quando voglio

//definizione
function nomeFunzione (parametro) {
    //cosa devo fare con parametro
    return //cosa ritorna la funzione, se non lo metto ritorna undefined
}

nomeFunzione("parametro assegnato da me") //invocazione, la funzione compie le sue istruzioni solo dopo essere stata invocata

//se voglio utilizzare il risultato della mia funzione lo inserisco in una variabile:
let variabilePerImmagazzinareLaFunzione = nomeFunzione("parametro che voglio") 

//IF ELSE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//gestiscono determinate azioni al verificarsi di condizioni specifiche

if (condizione) {
    "istruzioni da seguire se la condizione è verificata"
}

//se voglio gestire anche il caso in qui la condizione NON è verificata

if (condizione) {
    "istruzioni da seguire se la condizione è verificata"
} else {
    "istruzioni da seguire se la condizione NON è verificata"
}

//se ho più di una condizione

if (condizione1){
    "istruzioni da seguire se la condizione1 è verificata"
} else if (condizione2) {
    "istruzioni da seguire se la condizione1 NON è verificata ma la condizione2 sì"
} else {
    "istruzioni da seguire se nè la condizione1 nè la condizione2 sono verificate (opzionale)"
}

//ARRAY//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//sono dei contenitori che mi permettono di mettere più valori in un unica variabile

let nomeArray = ["elemento1", "elemento2", "elemento3"]

//per accedere agli elementi dell'array uso un indice numerico che mi indica la posizione di quell'elemento nell'array
//ATTENZIONE l'indice numerico inizia a contare da 0!

nomeArray[0] // => elemento1
nomeArray[1] // => elemento2
nomeArray[2] // => elemento3

//OGGETTI/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//strutture di dati con proprietà interne

nomeOggetto = {
    chiave1: "valore1", //la coppia chiave-valore prende il nome di proprietà
    chiave1: "valore1",
    chiave1: "valore1",
}

//accedo al dato che mi interessa tramite la chiave

nomeOggetto.chiave1 // => valore1
nomeOggetto[chiave2] // => valore2

//quest'ultima è una notazione familiare!
//gli array non sono altro che oggetti le cui chiavi sono numeri che partono da 0!

//CICLI////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//permettono di ripetere delle azioni

for (let indice="partenza"; "condizione di fine"; "incremento dell'indice"){
    "istruzioni da seguire ciclicamente"
    "fino a quando la condizione di fine sarà rispettata"
}
//solitamente l'indice parte da 0 (i=0) e incrementa ogni volta di 1 (i=i+1 o i++)

while (condizione) {
    "istruzioni da seguire ciclicamente se la condizione è verificata"
}
//il ciclo while viene utilizzato se non so il numero di cicli che voglio eseguire
