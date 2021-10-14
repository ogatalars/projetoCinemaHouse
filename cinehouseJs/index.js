// aqui é importado a constante movies e as seguintes funções:
// createMovie, addMovie, getMovieById, changeStatus
var {movies, createMovie, addMovie, getMovieById, changeStatus, listarFilmesEmCartaz} = require('./cinema');

let moviesInJson = JSON.stringify(movies);

// printando os dados presentes na constante movies (mesmos do aquivo JSON em database/catalog.json)
console.log(moviesInJson);


// criando novo objeto de movie
let newMovie = createMovie(3, 'Deadpool', 'acao');
addMovie(newMovie);
console.log(movies);
 
// alterando status
changeStatus(1);
 
console.log('--------------------------------------------')
console.log(movies);

console.log('--------------------------------------------')
console.log('Listando totos os filmes em cartaz')
listarFilmesEmCartaz();

console.log('--------------------------------------------') 
// obtendo objeto de movie pelo id
let deadpool = getMovieById(3);
console.log(deadpool)