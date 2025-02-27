// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(movie => movie.director);
  return directors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

  /*const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
  const spielbergDramaMovies = dramaMovies.filter(movie => movie.director === 'Steven Spielberg');

  return spielbergDramaMovies.length;
}*/
  const dramaMovies = moviesArray.filter(function (movie) {
    return movie.genre.includes('Drama');
  });

  const spielbergDramaMovies = dramaMovies.filter(function (movie) {
    return movie.director === 'Steven Spielberg';
  });

  return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

  if (moviesArray.length === 0) return 0;

  const sum = moviesArray.reduce((acc, movie) => {
    const score = movie.score || 0;
    return acc + score;
  }, 0);

  const average = Math.round((sum / moviesArray.length) * 100) / 100

  return average
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

  const dramaMovies = moviesArray.filter(function (movie) {
    
    return movie.genre.includes('Drama');
  });

  if (dramaMovies.length === 0) return 0;

  const sum = dramaMovies.reduce(function (acc, movie) {
    const score = movie.score || 0;
    return acc + score;
  }, 0);

  const average = Math.round((sum / dramaMovies.length) * 100) / 100;

  return average;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

  const moviesCopy = moviesArray.slice();

  moviesCopy.sort(function(a, b) {

    if (a.year !== b.year) {
      return a.year - b.year;
    }
    
      return a.title.localeCompare(b.title);
    
  
});

return moviesCopy;

}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
