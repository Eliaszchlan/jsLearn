const numberOfFilms = +prompt('How much movies you watching?', '?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Your Last One Film???', ''),
    b = prompt('Rating? 1 - 10', ''),
    c = prompt('Your Last One Film???', ''),
    d = prompt('Rating? 1 - 10', '');

    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

    console.log(personalMovieDB);