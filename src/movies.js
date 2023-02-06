// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = movies => {

  let directors = movies.map(movie => movie.director);

// _Bonus_ 1.1: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

return directors.filter((item, index) => directors.indexOf(item) === index);

};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = movies => {

  let counter = 0;

  movies.filter(movie => {
    if(movie.director == 'Steven Spielberg' && movie.genre.includes('Drama')) counter++
  })

  return counter
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const ratesAverage = movies => {

  if(!movies.length) return 0

  let rates = movies.map(movie => movie.rate);

  let sum = rates.reduce((a,b) => typeof b === 'number' ? a + b : a + 0);

  return Number((sum/rates.length).toFixed(2))

};

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = movies => {

  let dramaRate = []

  movies.filter(movie => movie.genre.includes('Drama') ? dramaRate.push(movie.rate) : 0)

  const sum = dramaRate.reduce((a,b) => typeof b === 'number' ? a + b : a + 0);

  return Number((sum/dramaRate.length).toFixed(2))

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = movies => {

 const sorted = [...movies].sort((movie1, movie2) => movie1.year > movie2.year ? 1 : -1);

 return sorted;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = movies => movies.map(movie => movie.title).sort().slice(0,20);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = movies => {

  const moviesArr = []

  movies.map(movie => {
    if(movie.duration.includes("h") && movie.duration.includes("min")){
      const [hours, minutes] = movie.duration.split(" ")
      const [hoursVal, hourUnit] = hours.split("h")
      const [minuteVal, minuteUnit] = minutes.split("min")

      movie.duration = parseInt(hoursVal) * 60 + parseInt(minuteVal)

      moviesArr.push(movie)

    } else if(movie.duration.includes("h") && !movie.duration.includes("min")){
      const [hoursVal, hourUnit] = movie.duration.split(" ")

      movie.duration = parseInt(hoursVal) * 60

      moviesArr.push(movie)

    } else if(!movie.duration.includes("h") && movie.duration.includes("min")){
      const [minVal, minUnit] = movie.duration.split(" ")

      movie.duration = parseInt(minVal)

      moviesArr.push(movie)
    }
  })

  return moviesArr

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
const bestYearAvg = movies => {

  if(!movies.length) return null

  let scoresByYear = {}

  movies.forEach(movie => {
    if(!scoresByYear[movie.year]){
      scoresByYear[movie.year] = {
        totalScore : 0,
        count: 0
      }
    }
    scoresByYear[movie.year].totalScore += movie.rate;
    scoresByYear[movie.year].count += 1;
  })

  let bestAvg = 0;
  let bestYear = null;

  for(let year in scoresByYear){
    let avg = scoresByYear[year].totalScore / scoresByYear[year].count
    if(avg > bestAvg){
      bestAvg = avg;
      bestYear = year;
    }
  }

  console.log(bestYear, bestAvg)

  return `The best year was ${bestYear} with an average score of ${bestAvg}`

}