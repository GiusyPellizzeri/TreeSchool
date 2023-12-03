// CREO I TAG HTML

function getOrCreateElementById(id, tagName, callback){
    const rootElement = document.getElementById("root")
    const foundElement = document.getElementById(id)
    if(foundElement){
        callback(foundElement)
        return 
    }
    const newElement = document.createElement(tagName)
    const manipulatedElement = callback(newElement)
    rootElement.append(manipulatedElement)
    return document.getElementById(id)
}

// COMPONENTI JS

function renderTitle(props){
    getOrCreateElementById("title", "h1", function(h1Element){
        h1Element.id = "title"
        h1Element.innerText = `Episodio: ${props.movieEpisodeId}, ${props.movieTitle}`
        return h1Element
    })
}

function renderDirector(props){
    getOrCreateElementById("director", "h2", function(h2Element){
        h2Element.id = "director"
        h2Element.innerText = `Director: ${props.movieDirector}`
        return h2Element
    })
}

function renderProducer(props){
    getOrCreateElementById("producer", "h3", function(h3Element){
        h3Element.id = "producer"
        h3Element.innerText = `Producer: ${props.movieProducer}`
        return h3Element
    })
}

function renderOpening(props){
    getOrCreateElementById("opening", "p", function(pElement){
        pElement.id = "opening"
        pElement.innerText = props.opening
        return pElement
    })
}

function renderPlanets(props){
    renderList({
        elementId: "planets_list",
        dataList: props.planets
    })
}

function renderSpecies(props){
    renderList({
        elementId: "species_list",
        dataList: props.species
    })
}

function renderList(props){
    const ulElement = getOrCreateElementById(props.element.id, "ul", function(ulElement){
       // ulElement.id = "props.element.id";
        ulElement.innerHTML = ""
        return ulElement
    })
    
    props.dataList.forEach(function(dataItem){
        const liElement = document.createElement("li")
        liElement.innerText = dataItem
        ulElement.appendChild(liElement)
    })
}

function renderGreeting(props){
    getOrCreateElementById("finally", "h3", function(h3Element){
        h3Element.id = "finally"
        h3Element.innerText = "è bello conoscere altri appassionati"
        return h3Element
    })
}

function renderError(props){
    getOrCreateElementById("error_text", "p", function(pElement){
        pElement.id = "error_text"
        pElement.innerText = "qualcosa è andato storto, mi sa che la forza non è con te :("
        return pElement
    })
}

// COMPONENTE APP

function renderApp(props){

    if (props.isLoading === true ){
        return
    }
    if(props.hasError){
        renderError()

        renderGreeting()
        return 
    }

    if(props.planets !== undefined){

        renderTitle({
            movieTitle: props.movieTitle,
            movieEpisodeId: props.movieEpisodeId
        })

        // qui vogliamo renderizzare il movie.director con un h2
        renderDirector({
            movieDirector: props.movieDirector
        })

        renderProducer({
            movieProducer: props.movieProducer
        })       

        renderPlanets({
            planets: props.planets
        })

        // qui vogliamo renderizzare la lista movie.species con ul e relativi li
        renderSpecies({
            species: props.species
        })

        renderOpening({
            opening: props.opening
        })

        renderGreeting()
    }
}

async function App(props){

    const state = {
        planets: undefined,
        isLoading: false,
        hasError: false
    }

    async function fetchMovieById(id){
        const url = `https://swapi.dev/api/films/${id}/`
        const res = await fetch(url);
        const movie = await res.json();
        return movie
    }
   
    renderApp(state)

    try {
        renderApp({
            planets: undefined,
            isLoading: true,
            hasError: false
        })
        const movie = await fetchMovieById(props.id);
        renderApp({
            planets: movie.planets,
            movieEpisodeId: movie.episode_id,
            movieTitle: movie.title,
            movieDirector: movie.director,
            species: movie.species,
            movieProducer: movie.producer,
            opening: movie.opening_crawl,
            isLoading: false,
            hasError: false
        })
    } catch(e) {
        console.log(e)
        renderApp({
            planets: undefined,
            isLoading: false,
            hasError: true
        })
    }
}

async function MyApplication(){
    await App({id: 1})
}

MyApplication()