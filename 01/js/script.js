let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let film = prompt('Один из последних просмотренных фильмов?', '');
let grade = prompt('На сколько оцените его?', '');
personalMovieDB.movies[film] = grade;
film = prompt('Один из последних просмотренных фильмов?', '');
grade = prompt('На сколько оцените его?', '');
personalMovieDB.movies[film] = grade;
console.log(personalMovieDB);