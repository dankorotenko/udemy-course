let numberOfFilms = +prompt('How many movies have u watched?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {
        add: 12,

    },
    actors: {},
    genres: [],
    privat: false
}

let m1 = prompt('One of the last movies you watched?', '')
let r1 = prompt('Rate it:', '');
let m2 = prompt('One of the last movies you watched?', '')
let r2 = prompt('Rate it:', '');
personalMovieDB.movies = {
    [m1]: r1,
    [m2]: r2
}
console.log(personalMovieDB);
