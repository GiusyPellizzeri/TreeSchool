class Point{
    constructor(x,y){
        this.x
        this.y
    }

    static displayNome = "point"
    displayName = "point"

    static distance(a,b){
        let dx = a-b
        let dy= a+b
        return Math.hypot(dx,dy)
    }
}

let pointA = new Point(5,5)
console.log("display nome",pointA.displayNome)
console.log("display name",pointA.displayName)
console.log(Point.displayNome)


//se metto static quel metodo è pensato senza inizializzare la classe
//se è static per utilizzarlo devo usare il nome della classe
//se non lo è devo usare il nome dell'elemento

//FORM//(fatto interamenteda lei che non stavo scrivendo)

utenti = new Array();

function aggiungiUtente(){
    let nome = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let city = document.getElementById("city").value;
    //console.log(nome , surname , city); 
    utenti.push(nome+" "+surname+" "+city);
    //console.log(utenti);
}