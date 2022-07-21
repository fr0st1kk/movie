'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
}

for (let i = 0; i < 1; i++){
   const questionLastFilm = prompt('Один из последних просмотренных фильмов?', ''),
         questionGredeFilm = +prompt('На сколько оцените его?', '');

         if (questionLastFilm != null && questionGredeFilm != null && questionLastFilm != '' && questionGredeFilm != '' && questionLastFilm.length < 50) {
            personalMovieDB.movies[questionLastFilm] = questionGredeFilm;
            console.log('Результат ответов записан');
         } else {
            console.log('Ошибка');
            i--;
         }
         
}
if (personalMovieDB.count < 10){
   console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
   console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
   console.log('Вы киноман');
} else {
   console.log('Произошла ошибка');
}
console.log(personalMovieDB);





