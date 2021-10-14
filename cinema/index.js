const movies = require("./database/catalogo.json")

function createMovie(id, titulo, genero) {
    return {
        id: id,
        titulo: titulo,
        genero: genero,
        emCartaz: false,
    }
}

function addMovie(movie) {
    movies.push(movie);
}

function getMovieById(id) {
    // solução com callback
    // movies.find(movie => movie.id === id);
    for(i = 0; i < movies.length; i++) {
        if(movies[i].id == id) {
            return movies[i];
        }
    }
}

function changeStatus(id) {
    let movie = getMovieById(id);
    movie.emCartaz = movie.emCartaz ? false : true;
    return movie;
}

// function listarTodosOsFilmes() {
//     movies.forEach(function(nameMovie)
//     {
//         console.log(nameMovie)
//     })

// }

// listarTodosOsFilmes()

function listarTodosOsFilmes() {
    for(let propriedade in movies){
        console.log(movies[propriedade])
    }
}
listarTodosOsFilmes()

function filmesEmCartaz() {
    for(let i = 0; i < movies.length; i++) {
        if(movies[i].emCartaz == true) {
            return "o(s) filme(s) que se encontra(m) em cartaz:" + movies[i].titulo
        }
    }
}

// function filmesEmCartaz() {
//     let [{titulo}] = movies
//     console.log(titulo);
// }
filmesEmCartaz()

function changeStatus(id) {
    let movie = getMovieById(id);
    movie.emCartaz = movie.emCartaz ? false : true;
    return movie;
}

// let filmesEmCartaz = () => {
//     for(let i = 0; i < movies.length; i++) {
//         movies[i].emCartaz == true ? movies[i].titulo: false
//     }
// }


// function filmesEmCartaz() {
//     movies.filter(function(emCartaz)
//     {
//         return emCartaz == true
//     })

// }

// console.log(filmesEmCartaz())

console.log(filmesEmCartaz())

module.exports = {movies, createMovie, addMovie, getMovieById, changeStatus};

