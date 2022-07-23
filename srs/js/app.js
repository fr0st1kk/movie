'use strict';





const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: true,



   start: function () {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
   
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
      }
   },

   rememberMyFilms: function () {
      for (let i = 0; i < 1; i++){
         const questionLikeGerres = prompt('Один из последних просмотренных фильмов?', '').trim(),
               questionGredeFilm = +prompt('На сколько оцените его?', '');
      
               if (questionLikeGerres != null && questionGredeFilm != null && questionLikeGerres != '' && questionGredeFilm != '' && questionLikeGerres.length < 50) {
                  personalMovieDB.movies[questionLikeGerres] = questionGredeFilm;
                  console.log('Результат ответов записан');
               } else {
                  console.log('Ошибка');
                  i--;
               }
               
      }
   },

   detectPersonalLevel: function () {
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
   },

   showMyDb: function (hidden) {
      if (!hidden) {
         console.log(personalMovieDB);
      }
   },

   toggleVisibleMyDB: function() {
      if(personalMovieDB.privat) {
         personalMovieDB.privat = false;
      }
   },

   writeYourGenres: function () {
      for (let i = 1; i <= 3; i++){
         let genre = prompt(`Ваш любимый жанр под номером ${i}`);

         if (genre === '' || genre == null) {
            console.log('Вы ввели некорректные данные или не ввели их вовсе');
            i--;
         } else {
            personalMovieDB.genres[i - 1] = genre;
         }
   }
   personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
   });
}
}
//personalMovieDB.start();
//personalMovieDB.rememberMyFilms()
//personalMovieDB.detectPersonalLevel()
//personalMovieDB.showMyDb()
//personalMovieDB.writeYourGenres()
//personalMovieDB.toggleVisibleMyDB()

function createCounter() {
   let counter = 0;

   const myFunction= function() {
      counter = counter + 1;
      return counter;
   }

   return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);