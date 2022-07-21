'use strict';

let numberOfFilms;

function start() {
   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
   }
}
start();



const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
}


function rememberMyFilms() {
   for (let i = 0; i < 1; i++){
      const questionLikeGerres = prompt('Один из последних просмотренных фильмов?', ''),
            questionGredeFilm = +prompt('На сколько оцените его?', '');
   
            if (questionLikeGerres != null && questionGredeFilm != null && questionLikeGerres != '' && questionGredeFilm != '' && questionLikeGerres.length < 50) {
               personalMovieDB.movies[questionLikeGerres] = questionGredeFilm;
               console.log('Результат ответов записан');
            } else {
               console.log('Ошибка');
               i--;
            }
            
   }
};
rememberMyFilms()

function detectPersonalLevel() {
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
}
detectPersonalLevel();


function showMyDb(hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   }
}

showMyDb(personalMovieDB.privat)

function writeYourGenres() {
   for (let i = 1; i <= 3; i++){
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`)
   }
}
writeYourGenres()
