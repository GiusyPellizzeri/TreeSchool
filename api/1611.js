/*
Realizza una pagina web con un pulsante. 
Quando l'utente clicca sul pulsante, esegui una chiamata GET a un API pubblico 
(ad esempio, JSONPlaceholder) per ottenere e visualizzare dati sul documento.
https://jsonplaceholder.typicode.com/todos/1
*/

let contenitore = document.getElementById("contenitore")

async function getFetch(url){
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    //console.log(response);
    return await response.json();
}

async function testChiamata(){
    try{
        let dati = await getFetch("https://jsonplaceholder.typicode.com/todos/1");
        console.log(dati);
        let testo = JSON.stringify(dati)
        contenitore.append(testo)
    }
    catch(e){
        console.log("Errore", e);
    }
    finally{
        console.log("finito");
    } 
}

//metodo che ha usato andrea che è la stessa cosa ma il codice è completamente diversamente

// Questa è una funzione che fa una richiesta a un server remoto usando fetch
/*
function effettuaChiamataGET() {
    // Utilizza la funzione fetch per fare una richiesta GET a un endpoint specifico
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        // Quando la risposta è disponibile, converti il corpo della risposta in formato JSON
        .then(response => response.json())
        // Quando i dati JSON sono disponibili, aggiorna un elemento HTML con quei dati
        .then(data => {
            // Trova un elemento HTML con l'id 'risultatoGET' e aggiorna il suo testo con i dati JSON formattati
            document.getElementById('risultatoGET').textContent = JSON.stringify(data, null, 2);
        })
        // Se si verifica un errore durante la richiesta, mostra un messaggio di errore nella console
        .catch(error => console.error('Errore durante la chiamata GET:', error));
}
*/

function getUrl(url){
    return new Promise(function(resolve, reject){
        let http = new XMLHttpRequest(); 
        http.onreadystatechange = function(){
            let data;
            if(http.readyState == 4){ // verifica se è stata completata
                if(http.status == 200){ // se è andato a buon fine 404 errore -- 500 server
                    data = JSON.parse(http.responseText);
                    resolve(data);
                    console.log(data)
                    let testo = JSON.stringify(data)
                    contenitore.append(testo)
                }
                else {
                    reject(new Error(http.statusText));
                }
            }
        }
        http.open("GET","https://jsonplaceholder.typicode.com/todos/1",true);
        http.send();
    });
}