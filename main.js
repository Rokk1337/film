   'use strict';
   var numberOfFilms; 
	do {
        numberOfFilms = prompt('сколько фильмов вы уже посмотрели', "");
	} while (!numberOfFilms);

    if(numberOfFilms<10){
        alert("Просмотренно мало фильмов");
    }else{
        if(numberOfFilms>10||numberOfFilms<30){
            alert("Вы классический зритель");
        }else{
            if(numberOfFilms>30){
                alert("Вы киноман");
        }else{
            alert("Произошла ошибка");}
            }
    }

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//  for(var i=0;i<=1;i++){
//     var a,b;
//         do {
//           a = prompt('Один из последних фильмов?', "");
//           console.log(!a);
//         } while (!a||a.length>=50);
//         do {
//             b = prompt("На сколько его оцените?","");
//         } while (!b||b.length>=50);
//         personalMovieDB.movies[a] = [b];
//  }

//  console.log(personalMovieDB);
