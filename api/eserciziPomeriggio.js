/*
https://swapi.dev/api/films/1/
scriviamo una funzione che fetcha un film per id 
e ritorna vero o falso in base al fatto che sia presente Chewbecca
*/

async function movies(){
    const response = await fetch("https://swapi.info/api/films/4")
    const film = await response.json()
    return film

}

async function chewbawccaCheck(){
    const film = await movies()
    
    console.log(film.title)

    if((film.characters).includes("https://swapi.info/api/people/6")){
        console.log("c'è Chewbecca :)")
    } else {
        console.log("non c'è Chewbecca :(")
    }

}

//chewbawccaCheck()

/*
se non ci sono errori nella chiamata stampo un ul nel DOM con i planets negli li
e sopra la lista un tag h1 con il titolo del film e il numero di episodio

se c'è un errore mostriamo nel DOM un messaggio di errore

in ogni caso alla fine mostrate un h3 con scritto "è bello conoscere altri appassionati"
*/

async function mostraPianeti(){
    try {
        const film = await movies()
        //throw new Error("ERRORONE")
        let titolo = document.getElementById("titolo")
        titolo.innerText = `Titolo: ${film.title} Episodio: ${film.episode_id}`

        let lista = document.getElementById("listapianeti")
        film.planets.forEach(planet => {
            let liElement = document.createElement("li")
            liElement.innerText = planet
            lista.append(liElement)
        });
    }
    catch(e) {
        let errore = document.getElementById("errore")
        errore.style.display = "block"
    }
    finally{
        let finale = document.getElementById("fine")
        finale.style.display = "block"
    }
}

/*
oltre al title vogliamo renderizzare anche il director con un h2 e sotto i pianeti la lista delle species
*/