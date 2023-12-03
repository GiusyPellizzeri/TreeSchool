const myStudents = ["paolo", "luca", "francesco", "giada", "gino"];

//versione fatta da me giulia e monica con alcune cose inutili
let arrayNuovo = []; //lo fa già map

myStudents.map(
    function (name){
        let oggetto = {
            name: name, //posso mettere solo name dato che i due valori sono uguali
            subject: "Javascript class",
            age: name.length*4
        }
        arrayNuovo.push(oggetto) //lo fa già map
        return arrayNuovo //posso direttamente mettere in return l'oggetto
    }
)

console.log(arrayNuovo)

//versione "giusta" di riccardo (giusta ovvero senza cose inutili)

let nuovoArray = myStudents.map(
    function(name) {
        return {
            name,
            subject: "javascript class",
            age: name.length*4
        }
    }
)

console.log(nuovoArray)