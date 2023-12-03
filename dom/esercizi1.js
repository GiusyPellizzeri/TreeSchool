//Dato il seguente array [3,1,40,12,42,100,431,76,4,9]. 
let vettore = [3,1,40,12,42,100,431,76,4,9]
document.getElementById("array").append(vettore)

//Creare dei bottoni che al click scatenano un evento.

//Il primo bottone mostra un messaggio con la somma. (718)
document.getElementById("somma").onclick = function(){
    let somma = vettore.reduce((prec,succ)=>prec+succ)
    alert(somma)
}

//Il secondo colora di blu il numero maggiore.
document.getElementById("blu").onclick = function(){
    let maggiore = 0
    for(i=0; i<vettore.length; i++){
        if(vettore[i]>maggiore){
            maggiore = vettore[i]
        }
    }
    let max = document.getElementById("max")
    max.innerHTML = maggiore
    max.style.color = "blue"
}

//trovare il massimo con reduce e math
let maxi = vettore.reduce((a,b) => Math.max(a,b))
console.log(maxi)

//Il terzo colora di rosso il numero più piccolo.
document.getElementById("rosso").onclick = function(){
    let minore = vettore[0]
    for(i=0; i<vettore.length; i++){
        if(vettore[i]<minore){
            minore = vettore[i]
        }
    }
    let min = document.getElementById("min")
    min.innerHTML = minore
    min.style.color = "red"
}

//minore con reduce e math
let mini = vettore.reduce((a,b) => Math.min(a,b))
console.log(mini)

//Il quarto sceglie un numero casuale e lo triplica.
document.getElementById("triplo").onclick = function(){
    let random = Math.random()*vettore.length
    let randomIntero = Math.floor(random)
    console.log(randomIntero)
    console.log(vettore[randomIntero])
    let triplo = vettore[randomIntero]*3

    let min = document.getElementById("casuale")
    min.innerHTML = triplo
}

//Il quinto mostra un messaggio con la somma tutti i numeri pari. (274)
document.getElementById("sommapari").onclick = function(){
    let pari = vettore.filter(pippo => pippo%2==0)
    let sommapari = pari.reduce((prec,succ)=>prec+succ)
    alert(sommapari)
}