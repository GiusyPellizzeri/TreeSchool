//devo inserire il codice dopo il caricamento della pagina, se no non funziona
//se uso onload posso mettere il codice nel head del html
window.onload = function (){
    document.getElementById("testo").onclick = function(){
        alert("benvenuto di nuovo")
    }
    document.getElementById("onMouseOver").onmouseover = function(){
        console.log("sono sull'elemento")
    }
    document.getElementById("onMouseOver").onmouseout = function(){
        console.log("sono uscito")
    }
    document.getElementById("testoKey").onkeypress = function(){
        console.log(this.value) //stampa quello che sto scrivendo
    }
    document.getElementById("onBlur").onfocus = function(){
        console.log("stai scrivendo")
    }
    document.getElementById("onBlur").onblur = function(){
        console.log("not stai scrivendo")
    }
    document.getElementById("cambioCSS").onclick = function(){
        let css = document.getElementById("cambioCSS")
        css.style.color = "pink"
    }
    document.getElementById("cambioHTML").onclick = function(){
        let html = document.getElementById("cambioHTML")
        html.innerHTML = "<p> ora sono un paragrafo </p>"
    }
}

clickTesto = function(){
    alert("benvenuto")
}

selezionaAuto = function(){
    let valore = document.getElementById("mySelect").value
    console.log(valore)
}