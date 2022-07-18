'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
}

const questionLastFilm = prompt('Один из последних просмотренных фильмов?', ''),
      questionGredeFilm = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[questionLastFilm] = questionGredeFilm;
console.log(personalMovieDB);