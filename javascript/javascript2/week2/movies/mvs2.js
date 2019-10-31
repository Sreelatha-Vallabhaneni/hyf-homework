console.log(movies);
// 1. Shorttitle Movies
const shortTitleMovies = movies.filter(movie => movie.title.length <= 5);
console.log('1. Short Title Movies :', shortTitleMovies);

//2. Longtitle Movies
const longTitleMovies = movies.filter(movie => movie.title.length > 20);
console.log('2. Long Title Movies :', longTitleMovies);
//3. Count the No.of movies between 1980-1989
const countMovies = movies.reduce((acc, movie) => movie.year >= 1980 && movie.year <= 1989? acc += 1:acc,0)
console.log('3. Count movies between 1980-1989 :', countMovies);
// 4. extra key called tag with good, or average, or bad result.
const extraKeyTag = movies.map(movie => {
  const tagKey = Object.assign({}, movie);
  if (movie.rating >= 7) {
    tagKey.tag = "Good";
  } else if (movie.rating >= 4 && movie.rating < 7) {
    tagKey.tag = "Average";
  } else if (movie.rating < 4) {
    tagKey.tag = "Bad";
  }
  return tagKey;
});
console.log('4. Tag Key :', extraKeyTag);
// 5. Using chaining,
const chaining = movies
  .filter(movie => movie.rating > 6)
  .map(movie => movie.rating);
console.log('5. Movie Ratings above 6 :', chaining);
// 6. Count the total number of movies
const countTotalMoviesWithKeywords = movies.filter(
  movie =>
    movie.title.includes("Surfer") ||
    movie.title.includes("Alien") ||
    movie.title.includes("Benjamin")
).length;
console.log(
  '6. Count total movies with keywords :',
  countTotalMoviesWithKeywords
);
// 7. A word in the title is duplicated

function splitWords(title, bool_type = false){
 if (bool_type) {
   title = title.toLocaleLowerCase();  
 }
  return title.split(/[^a-z0-9]+/gi).filter(word => word.length);
}
function findDuplicateWords(title, bool_type = false){
  const splitArr = splitWords(title, bool_type = false)
  const duplicates = {};
  splitArr.forEach(word => !duplicates[word] ? (duplicates[word] = 1) : (duplicates[word] += 1));
  const findDuplicates = Object.entries(duplicates)
  .map(([word, count]) => ({ word, count }))
  .filter(obj => obj.count > 1)
  findDuplicates.sort((a, b) => b.count - a.count);
    if(findDuplicates.length){
      return findDuplicates;
    }
}
const moviesWithDuplicateWords = movies.filter(movie =>
  findDuplicateWords(movie.title, true));
console.log("7. Duplicate Words :", moviesWithDuplicateWords);




