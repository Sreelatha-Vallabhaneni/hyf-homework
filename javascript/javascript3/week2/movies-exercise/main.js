fetch(
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
).then(response => response.json())
.then(movies => {
  console.log('Movies: ', movies);
  // Create an array of bad movies
  const badMovies = movies.filter(movie => movie.rating <= 3)
  console.log('1. Bad Movies: ', badMovies)
  return badMovies;})
//Creat an array of bad movies since year 2000
.then( movies => {
  const badMoviesSinceYr2k = movies.filter(movie => movie.year >= 2000 && movie.rating <= 3)
  console.log('2. Bad Movies Since 2000: ', badMoviesSinceYr2k);
  return badMoviesSinceYr2k;})
//Create an array of the titles of the bad movies since year 2000     
.then(movies => {
  const badMoviesTitles = movies.map(movie => movie.title)
  console.log('3. Bad Movies Titles Since 2000: ', badMoviesTitles);
  return badMoviesTitles;
})
