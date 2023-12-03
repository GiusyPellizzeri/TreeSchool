
class Car {
    constructor(model, color, brand, km) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.km = km;
    }
}
class Suv extends Car {
    horn() {
        console.log("Bigga than ya")
    }
}

/*
classe CONCESSIONARIO

proprietà
-parco auto (array di auto)
-clienti registrati (array di nomi)

funzionalità
-restituisce lista auto
-vendita (se il cliente è registrato i suv sono disponibili)(devo sapere cosa vuole comprare)
-registra cliente (chiede il nome e aggiunge alla lista di clienti)
*/

class concessionario{
    constructor(cars,customers){
        this.cars = cars
        this.customers = customers
    }

    listaAuto(){
        console.log(this.cars) //stampa l'array di macchine
        this.cars.forEach(element => {
            console.log(element)
        });
    }

    venditaAuto(nome,marca,modello){
        if(customers.includes(nome)){
            let marcaMacchinina = cars.filter(x => marca === x.brand)
            let miaMacchinina = marcaMacchinina.filter(x => modello === x.model)
            console.log(miaMacchinina)
        } else if(!customers.includes(nome)){
            let ricerca = cars.filter(x => modello === x.model)
            if(ricerca[0] instanceof Suv){
                console.log("non puoi comprare questa macchina")
            } else {
                let marcaMacchinina = cars.filter(x => marca === x.brand)
                let miaMacchinina = marcaMacchinina.filter(x => modello === x.model)
                console.log(miaMacchinina)                
            }
        }
    }

    registrazione(nome){
        customers.push(nome)
    }
}

const cars = [
    new Car("Punto", "White", "Fiat", 24),
    new Car("XC40","Blue", "Volvo", 10),
    new Suv("Panda", "Green", "Fiat", 12),
    new Suv("X5", "Red", "BMW", 0)
];

const customers = ["Frodo Baggins", "Samwise Gamgee", "Meriadoc Brandibuc", "Peregrin Tuc"];

const concessionarioBellissimo= new concessionario(cars,customers)

concessionarioBellissimo.listaAuto()
console.log("")

concessionarioBellissimo.venditaAuto("Frodo Baggins","Fiat", "Panda")
concessionarioBellissimo.venditaAuto("aragorn","Fiat", "Panda")
concessionarioBellissimo.venditaAuto("aragorn","Fiat", "Punto")

concessionarioBellissimo.registrazione("aragorn")
console.log("")

concessionarioBellissimo.venditaAuto("Frodo Baggins","Fiat", "Panda")
concessionarioBellissimo.venditaAuto("aragorn","Fiat", "Panda")
concessionarioBellissimo.venditaAuto("aragorn","Fiat", "Punto")