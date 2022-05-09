let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

writeYourGenres() ;
showMyDB(personalMovieDB.privat);

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || !numberOfFilms || isNaN(numberOfFilms))
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
}

function rememberMyFilms (){
    let i = 0;
    while (i < 2) {
        i++;
        let film = prompt('Один из последних просмотренных фильмов?', '');
        if (!film)
            i = 0;
        else if (film.length > 50)
            i = 0;
        else {
            let grade = prompt('На сколько оцените его?', '');
            personalMovieDB.movies[film] = grade;
        }
    }
}
function detectPersonsonalLevel (){
    if (personalMovieDB.count < 10 && personalMovieDB.count != 0)
        console.log('Просмотрено довольно мало фильмов');
    else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30)
        console.log('Вы классический зритель');
    else if (personalMovieDB.count > 30)
        console.log('Вы киноман');
    else
        console.log('Произошла ошибка');
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++)
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
}

function showMyDB(hidden) {
    if (!hidden)
        console.log(personalMovieDB);
}