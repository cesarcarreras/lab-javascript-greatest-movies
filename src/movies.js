// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = movies => {

  let newDirArr = movies.map(e => e.director)

  //Bonus (Remove duplicates):
  let filDirArr = newDirArr.filter((item, index) => {
    return newDirArr.indexOf(item) === index
  })

  return filDirArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = movies => {

  let dramaAndSteven = 0;

  let filArr = movies.filter(movie => {
     if(movie.director === "Steven Spielberg" && movie.genre.includes('Drama')){
          dramaAndSteven ++
     }
  })

  return dramaAndSteven
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const ratesAverage = movies => {

  if (!movies.length) return 0;

  let rates = movies.map(movie => movie.rate);

  let sum = rates.reduce((acc, currVal) => {
      if (typeof currVal === "number") {
          return acc + currVal;
        } else {
          return acc + 0;
        }
  })

  return Number((sum/rates.length).toFixed(2));

};

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = movies => {

  let DramaCounter = 0;

  const rateSum = movies.reduce((acc, currVal) => {
    if(typeof currVal.rate === 'number' && currVal.genre.includes('Drama')){
      DramaCounter++
      return acc + currVal.rate
    }
    return acc + 0
  }, 0)
  return Number((rateSum/DramaCounter).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = movies => {

  const sorted = [...movies].sort((movie1, movie2) => {
    if(movie1.year > movie2.year){
      return 1
    } else{
      return -1
    }
  });
  return sorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = movies => {

  let titles = movies.map(movie => {
    return movie.title
  })

  let sorted = titles.sort().slice(0,20)

  return sorted

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = movies => {

  let newArr = movies.map(movie => {
    if(movie.duration in movies){
      return movie.duration
    } else {
      movie.duration = 0
    }
  })

  console.log(newArr)

}

// let [hours, minutes] = movie.duration.split(' ')
// let mins = minutes.split('').slice(0, -3).join('')
// let hourstoMins = hours.split('').slice(0, -1).join('') * 60;
// let minsNum = parseInt(mins, 10)+12

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    ratesAverage,
    dramaMoviesRate,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}