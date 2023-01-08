// Movie Data to DOM Function

const addMoviestoDom = (array) => {
    const moviePosterUl = document.getElementById('movie-posters');

    while (moviePosterUl.firstChild) {
        moviePosterUl.removeChild(moviePosterUl.lastChild);
    }

    const moviePosterLi = array.map(movie => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const img = document.createElement('img');

        li.appendChild(a)
        a.setAttribute("href", "https://www.imdb.com/title/" + movie.imdbID)
        a.setAttribute("target", "_blank")
        a.appendChild(img)
        img.src = movie.poster

        return li
    });

    moviePosterLi.forEach(element => {
        moviePosterUl.appendChild(element)
    });

};

addMoviestoDom(movies);

// Eventlisteners on Radiobuttons

const addEventListenersToRadioButtons = () => {
    const radioButtons = document.querySelectorAll('[name="film-filter"]');
     radioButtons.forEach(button => {
        button.addEventListener("change", (e) => {
            handleOnChangeEvent(e);
            searchResults(e);
        });
    });
};

addEventListenersToRadioButtons();

// Switch Event 

const handleOnChangeEvent = (e) => {  
     switch (e.target.value) { 
        case "latest": 
            filterLatestMovies();
            break;
        case "avengers":
            filterMovies("Avengers");
            break;
        case "x-men":
            filterMovies("X-Men");
            break;
        case "princess":
            filterMovies("Princess");
            break;
        case "batman":
            filterMovies("Batman");
            break;
        default:
            break;
    }
};

// Filter Functions

const filterMovies = (wordInMovie) => { 
    const filteredMovies = movies.filter(movie => movie.title.match(wordInMovie));
    return addMoviestoDom(filteredMovies);
};

const filterLatestMovies = () => {
    const filteredMovies = movies.filter(movie => movie.year > 2014);
    return addMoviestoDom(filteredMovies);
};




