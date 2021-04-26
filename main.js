const numberOfFilms = +prompt("сколько фильмов вы уже посмотрели", "");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const filmAnswer = prompt("Один из последних фильмов?",""),
      reitingAnswer = prompt("На сколько его оцените?"," "),
      c = prompt("Один из последних фильмов?",""),
      d = prompt("На сколько его оцените?"," ");

personalMovieDB.movies[filmAnswer] = reitingAnswer;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);