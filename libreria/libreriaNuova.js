function libro(nome, autore, letto, dataPubblicazione, capitoli) {
    this.nome = nome;
    this.autore = autore;
    this.dataPubblicazione = dataPubblicazione;
    this.letto = letto;
    this.capitoli = capitoli;

    this.numeroTotaleDiPagine = function () {
      let sommaPagine = 0;
      for (let capitolo of this.capitoli) {
        sommaPagine += capitolo[1];
      }
      return sommaPagine;
    };
}

let libro1 = new libro("Pinocchio", "collodi", true, new Date(2018, 1, 12), [[1, 5],[2, 7],]);
let libro2 = new libro("Cuore", "de amicis", false, new Date(2020, 1, 12), [[1, 6],[2, 8],]);
let libro3 = new libro("La Divina Commedia", "Dante", false, new Date(2019, 11, 12),[[1, 7],[2, 9],]);

let libreria = new Array(libro1,libro2,libro3,);

let contenitore = document.getElementById("contenitore");

contenitore.innerHTML = "<table id='table'></table>";
let table = document.getElementById("table");

function tabella() {
  table.innerHTML = "";
  for (let i = 0; i < libreria.length; i++) {
    table.innerHTML +=
      `<tr id="riga${i}"> <td>` +
      // ` questo simbolo (backtick) si fa con alt + 96
      // ${i} vuol dire: in questo punto mettici una variabile
      libreria[i].nome +
      "</td> <td>" +
      libreria[i].autore +
      "</td> <td>" +
      libreria[i].dataPubblicazione.getDay() + // vedi come inserire data intera
      "</td> <td>" +
      libreria[i].numeroTotaleDiPagine() +
      "</td> </tr>";
    let riga = document.getElementById("riga" + i);
  }
}

function filtraAutore() {
    let ricerca = document.getElementById("search").value;
  
    for (let i = 0; i < libreria.length; i++) {
      let autore = libreria[i].autore.toLowerCase();
      if (autore.includes(ricerca.toLowerCase())) {
        let rigaTemp = document.getElementById("riga" + [i]);
        rigaTemp.style.backgroundColor = "green";
        rigaTemp.style.color = "white";
      } else {
        let rigaTemp = document.getElementById("riga" + [i]);
        rigaTemp.style.backgroundColor = "white";
        rigaTemp.style.color = "black";
      }
    }
  }

function aggiungiLibro() {
  
  let nomeLibro = document.getElementById("nome").value;
  let autoreLibro = document.getElementById("autore").value;
  let dataPubblicazione = document.getElementById("dataPubblicazione").value;
  let numeroTotaleDiPagine = document.getElementById("numeroTotaleDiPagine").value;

  if(nomeLibro=="" || autoreLibro=="" || dataPubblicazione=="" || numeroTotaleDiPagine==""){
    alert("non hai compilato tutti i campi")
  } else {
  let libroTemp = new libro(nomeLibro,autoreLibro,true,new Date(dataPubblicazione),[[1, numeroTotaleDiPagine]]);
  libreria.push(libroTemp);
  tabella();
  }
}

function EliminaLibro() {

  let nomeLibroEliminare = document.getElementById("nomeEliminare").value;
  let autoreLibroEliminare = document.getElementById("autoreEliminare").value;

  if(nomeLibroEliminare === "" || autoreLibroEliminare === ""){
 
    alert("non hai compilato tutti i campi")
  } else {
  for(i=0 ; i<libreria.length; i++){
    if(libreria[i].autore.toLowerCase() === autoreLibroEliminare.toLowerCase() && libreria[i].nome.toLowerCase() === nomeLibroEliminare.toLowerCase()){
      libreria.splice(i,1)
    }
  }
  tabella();
  }
  
}