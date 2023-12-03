//MANIPOLARE IL DOM////////////////////////////////////////////////////////////////////////////////////
//posso usare il codice javascript per modificare l'html della pagina

//prendo un elemento dal documento html
document.getElementById("id dell'elemento")
document.getElementsByClassName("classe dell'elemento")
document.getElementsByTagName("nome del tag")
document.getElementsByName("elementi con questo attributo nome")

//creare elementi nuovi
document.createElement("tag che voglio creare")

//aggiungere elementi ad un altro
elementoDaModificare.append("elementi da aggiungere")    //posso aggiungere più elementi
elementoDaModificare.appendChild("figlio da aggiungere") // posso aggiungere un solo elemento

//vedere informazioni sugli elementi
elemento.classList //vedo tutte le classi
elemento.childNodes //vedo tutti i figli

//alcune cose che si possono fare
//(in un file funzionante sono colorati in rosso)
elemento.textcontent = "testo da inserire nell'elemento"
elemento.value //il valore dell'elemento
elemento.style.proprietà = "valore" //cambio le proprietà css 
//ATTENZIONE l'elemento deve possedere quella proprietà per poterla modificare
//ovvero se voglio usare .style.color per cambiare il colore del testo, elemento deve essere un testo
//non chiedete come lo so
//non ho assolutamente sbagliato e cambiato una proprietà che l'elemento non aveva
elemento.innerHTML = "<tag> elemento html che voglio inserire </tag>"

//EVENTI//////////////////////////////////////////////////////////////////////////////////////////////
//un evento è qualcosa che accade in risposta ad un azione dell'utente
//lo posso inserire sia nel html sia in javasript

//in html <tag evento="azione">

elemento.evento = azione
elemento.addEventListener(evento,azione)

//azione => è una funzione
//eventi: (in un file che funziona davvero sono colorati in rosso)
elemento.onload //al completamento del caricamento dell'elemento
elemento.onmouseover //quando il cursore del mouse entra nell'elemento
elemento.onmouseout //quando il cursore del mouse esce dall'elemento
elemento.onclick //al click sull'elemento
elemento.onkeypress //quando si entra nell'elemento e premo un tasto
elemento.onchange //quando l'elemento subisce un cambiamento
elemento.onsubmit //all'invio di un form
elemento.onfocus //quando l'elemento viene selezionato
elemento.onblur //quando l'elemento non è più selezionato

