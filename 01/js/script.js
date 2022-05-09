const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count < 10 && personalMovieDB.count != 0)
    alert('Просмотрено довольно мало фильмов');
else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30)
    alert('Вы классический зритель');
else if (personalMovieDB.count > 30)
    alert('Вы киноман');
else
    alert('Произошла ошибка');

console.log(personalMovieDB);