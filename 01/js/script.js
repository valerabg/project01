
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || !personalMovieDB.count || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function() {
        let i = 0;
        while (i < 2) {
            i++;
            let film = prompt('Один из последних просмотренных фильмов?', '');
            if (!film || film.length > 50) {
                i = 0;
            }
            else {
                let grade = prompt('На сколько оцените его?', '');
                personalMovieDB.movies[film] = grade;
            }
        }
    },   
    
    detectPersonsonalLevel: function() {
        if (personalMovieDB.count < 10 && personalMovieDB.count != 0) {
            console.log('Просмотрено довольно мало фильмов');
        }
        else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        }
        else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        }
        else {
            console.log('Произошла ошибка');
        }
    },

    writeYourGenres: function() {
        let i = 0;
        while (i < 3) {
            i++;
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if(!personalMovieDB.genres[i - 1]) {
                i = 0;
            }
        }
        personalMovieDB.genres.forEach(function(element, i) {
            console.log(`Любимый жанр № ${i + 1} – ${element}`);
        });
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        if (!personalMovieDB.privat) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};

personalMovieDB.writeYourGenres();
// personalMovieDB.rememberMyFilms();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);