/*
Creare una entità persona con nome Marco, cognome Rossi, età 32 anni. 
Creare un’altra entità persona con nome Francesca, cognome Leotta, età 34 anni. 
Stampare il nome e cognome della persona più anziana. 
Aggiungere ad ogni persona la proprietà sesso, rispettivamente M e F. Stampare le entità femminili. 
*/

let persona1 = {
    nome: "Marco",
    cognome: "Rossi",
    età: 32
}
let persona2 = {
    nome: "Francesca",
    cognome: "Leotta",
    età: 34
}

//persona più anziana
if(persona1.età>persona2.età){
    console.log(persona1.nome, persona1.cognome)
} else {
    console.log(persona2.nome, persona2.cognome)
}

//posso scrivere l'oggetto in un altro modo

function persona(nome, cognome, età){
    this.nome = nome
    this.cognome = cognome
    this.età = età
}

//creo una nuova persona
let pers1 = new persona("marco","rossi",32)
let pers2 = new persona("francesca", "leotta",34)

//come prima, la persona più anziana
if(pers1.età>pers2.età){
    console.log(pers1.nome, pers1.cognome)
} else {
    console.log(pers2.nome, pers2.cognome)
}

//aggiungo il sesso
console.log(pers1)
pers1.sesso = "M"
pers2.sesso = "F"
console.log(pers1)

function verifySex(personaTemp){
    if(personaTemp.sesso=="F"){
        console.log(personaTemp.nome, personaTemp.cognome, "è di sesso femminile")
    } else {
        console.log(personaTemp.nome, personaTemp.cognome, "è di sesso maschile")
    }
}

verifySex(pers1)
verifySex(pers2)

//altro esempio con le auto
/*
Creare una lista di oggetti auto. Ogni auto deve contenere: marca, modello (string), 
colore(string) e anno produzione(number).  
AUTO: bmw, 530, blu, 2021
AUTO: audi, A6, grigia, 2020
AUTO: mercedes, c200, blu, 1988
AUTO: fiat, 126, giallo, 1975
AUTO: mazda, rx8, rossa, 2015
AUTO: fiat, panda, bianca, 1985

- Stampare tutte le auto blu.
- Creare un nuovo array contenente tutti le auto con anno di produzione  > 2000. 
*/

function auto(marca,modello,colore,anno){
    this.marca = marca
    this.modello = modello
    this.colore = colore
    this.anno = anno
}

let listaAuto = [
    new auto("bmw", "530", "blu", 2021),
    new auto("audi", "A6", "grigia", 2020),
    new auto("mercedes", "c200", "blu", 1988),
    new auto("fiat", "126", "giallo", 1975),
    new auto("mazda", "rx8", "rossa", 2015),
    new auto("fiat", "panda", "bianca", 1985)
]

//stampo le auto blu
for(let j=0; j<listaAuto.length; j++){
    if(listaAuto[j].colore == "blu"){
        console.log(listaAuto[j].marca, listaAuto[j].modello)
    }
}
//stessa cosa con i metodi array
let autoBLu = listaAuto.filter(el => el.colore == "blu")
console.log(autoBLu)

//anno inferiore 2000
let auto2000 = listaAuto.filter(el => el.anno < 2000)
console.log(auto2000)