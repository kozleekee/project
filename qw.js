"use strict";
const numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", " ");
const personalMovieDB = {
   count: numberOfFilms,
   movies:{},
   actors:{},
   genres:[],
   privat:false
};
const a = prompt ('Один из последних просмотренных фильмов?', ' '),
      b = prompt ('На сколько оцените его?',' '),
      c = prompt ('Один из последних просмотренных фильмов?', ' '),
      d = prompt ('На сколько оцените его?',' ');
personalMovieDB.movies[a] = b; 
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
//  нам выдаст a:b , тоесть название фильма и присвоенный ему рейтинг
