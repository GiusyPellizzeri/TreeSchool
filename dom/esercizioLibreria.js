/*
Creare una libreria di oggetti (almeno 4). Ogni oggetto deve contenere i seguenti attributi:

nome => stringa
autore => Stringa
letto => boolean true se è stato letto, false altrimenti
dataDiPubblicazione => Data
capitoli => array bidimensionale. Ad Esempio [[1,4], [2, 5]] 
il primo capito è formato da 4 pagine, il secondo è formato da 5 pagine

stampaCopertina() => funzione che restituisce una stringa formata da nome + autore + anno [V]
stampaPagineCapitoli() => funzione stampa il numero di pagine suddivise per capitoli [X]
anno() => funzione che restituisce l'anno di pubblicazione [non la faccio]
eventuali funzioni di supporto che potrebbero esservi utili

1. stampare le pagine totali dei libri
2. stampare l'elenco dei libri letti [V]
3. stampare le pagine totali dei libri letti
*/

//NON COMPLETATO E NON LO COMPLETERò
//per data dovevo mettere la data completa non solo l'anno
//ora la funzione che ti restituisce solo l'anno ha più senso lol

function libreria(titolo,autore,letto,dataDiPubblicazione,capitoli){
    this.titolo = titolo
    this.autore = autore
    this.letto = letto
    this.dataDiPubblicazione = dataDiPubblicazione
    this.capitoli = capitoli

    this.stampaCopertina = function(){
        console.log(titolo, autore, dataDiPubblicazione)
    }

    this.numeroTotaleDiPagine = function(){
        var sommaPagine = 0;
        for(var capitolo of this.capitoli){
            sommaPagine += capitolo[1];
        } 
        return sommaPagine;
    }
}

let listaLibri = [
    new libreria("lotr","tolkien","false",1965,[[1,6],[2,9],[3,6],[4,3]]), //24
    new libreria("guida","adams","true",2003,[[1,6],[2,4],[3,3],[4,4]]), //17
    new libreria("trono","martin","true",2007,[[1,1],[2,7],[3,6],[4,4]]), //18
    new libreria("bibbia","gesù","false",0,[[1,95],[2,75],[3,13],[4,65]]), //248
    new libreria("bar","stefano","true",1988,[[1,7],[2,3],[3,4],[4,6]]) //20
]

let libriLetti = listaLibri.filter(libro => libro.letto == "true")
//console.log("libri letti", libriLetti)

//console.log("LA MIA LIBRERIA:")
//listaLibri.forEach(el => el.stampaCopertina())

//console.log("PAGINE:")
//listaLibri.forEach(el => el.Pagine())

/*1) Modificare l'esercizio libreria affinché la libreria venga visualizzata su una tabella,
dove ogni riga corrisponde ad un libro.

Ogni libro dovrà avere le seguenti informazioni:
1. nome (text)
2. autore (text)
3. Data di uscita del libro (non anno)
4. Numero di pagine totali del libro (integer)*/

let contenitore = document.getElementById("contenitore")
contenitore.innerHTML = "<table id='table'></table>"
let table = document.getElementById("table")

for(let i=0; i<listaLibri.length; i++){
 table.innerHTML += `<tr id="riga${i}"><td>`+listaLibri[i].titolo+`</td><td>`+listaLibri[i].autore+`</td><td>`+listaLibri[i].dataDiPubblicazione+`</td><td>`+listaLibri[i].numeroTotaleDiPagine()+`</td></tr>`
}

/*RICERCA: sopra la tabella deve essere presente un input type text ed un bottone "cerca".
Al click del bottone devono essere cercati tutti i libri dell'autore scritto sulla text. 
Le righe dei libri trovati devono essere colorate di verde (potete ridisegnare la tabella). 
Attenzione, il nome dell'autore potrebbe essere incompleto, ad esempio ricerca per nome e/o cognome*/

function filtraAutore() {
    let ricerca = document.getElementById("search").value;
   
      for (let i = 0; i < libreria.length; i++) {
      if (libreria[i].autore === ricerca) {
        let rigaTemp = document.getElementById("riga" + [i]);
        rigaTemp.style.backgroundColor = "green";
      } else {
        let rigaTemp = document.getElementById("riga" + [i]);
        rigaTemp.style.backgroundColor = "white";
      }
    }
  }


/*INSERIMENTO: creare una form per inserire un nuovo libro. 
1. controllare che tutti i campi siano stati inseriti e che abbiano dei valori corretti.
2. Il nuovo libro correttamente inserito deve essere visualizzato sulla tabella 
(potete ridisegnare la tabella).



CANCELLA: creare una form per eliminare un libro.
1. Il libro può essere cancellato solo se vengono selezionati il nome e l'autore del libro.
2. Se uno dei due campi non è settato allora deve apparire un alert di avviso (potete ridisegnare la tabella).*/
    
