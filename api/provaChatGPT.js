/*
You
puoi farmi un esempio di fetch che richiami il metodo http get con javascript?
ChatGPT
Certamente! In JavaScript, puoi utilizzare la funzione fetch per eseguire una richiesta HTTP GET. 
Ecco un esempio di come potresti farlo:
*/

// Definisci l'URL della tua richiesta GET
const url = 'https://swapi.info/api/films';

// Utilizza la funzione fetch per eseguire la richiesta GET
fetch(url)
  .then(response => {
    // Verifica se la risposta è OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`Errore nella richiesta: ${response.status}`);
    }

    // Parsa la risposta JSON
    return response.json();
  })
  .then(data => {
    // Puoi lavorare con i dati restituiti dalla richiesta GET
    console.log('Dati ricevuti:', data);
  })
  .catch(error => {
    // Gestisci gli errori durante la richiesta
    console.error('Errore durante la richiesta:', error);
  });

  /*In questo esempio, stiamo eseguendo una richiesta GET all'URL specificato. 
  Se la richiesta ha successo (status code 200-299), parsiamo la risposta JSON. 
  Se la richiesta non ha successo, gestiamo l'errore e logghiamo un messaggio di errore.*/

