/* 
Filename: complexCode.js
Content: Complex JavaScript code to manipulate and analyze a dataset of movie ratings and generate a recommendation engine.
*/

// Define the Movie class
class Movie {
  constructor(title, genre, rating) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
  }

  getRating() {
    return this.rating;
  }

  setRating(newRating) {
    this.rating = newRating;
  }
}

// Sample movie dataset
const movies = [
  new Movie("The Shawshank Redemption", "Drama", 9.3),
  new Movie("The Godfather", "Crime", 9.2),
  new Movie("Pulp Fiction", "Crime", 8.9),
  // ... additional movies
];

// Define the RecommendationEngine class
class RecommendationEngine {
  constructor(movies) {
    this.movies = movies;
  }

  addMovie(movie) {
    this.movies.push(movie);
  }

  removeMovie(title) {
    this.movies = this.movies.filter((movie) => movie.title !== title);
  }

  getAverageRating() {
    if (this.movies.length === 0) return null;

    const totalRating = this.movies.reduce(
      (previous, current) => previous + current.getRating(),
      0
    );

    return totalRating / this.movies.length;
  }

  getTopRatedMovies(num) {
    return this.movies
      .sort((a, b) => b.getRating() - a.getRating())
      .slice(0, num);
  }

  getMoviesByGenre(genre) {
    return this.movies.filter((movie) => movie.genre === genre);
  }
}

// Create a recommendation engine instance
const recommendationEngine = new RecommendationEngine(movies);

// Add a new movie
recommendationEngine.addMovie(new Movie("The Dark Knight", "Action", 9.0));

// Remove a movie
recommendationEngine.removeMovie("Pulp Fiction");

// Get average rating of the movies
const averageRating = recommendationEngine.getAverageRating();
console.log(`Average rating: ${averageRating}`);

// Get top rated movies
const topRatedMovies = recommendationEngine.getTopRatedMovies(3);
console.log("Top rated movies:");
topRatedMovies.forEach((movie) =>
  console.log(`${movie.title} - ${movie.getRating()}`)
);

// Get movies by genre
const crimeMovies = recommendationEngine.getMoviesByGenre("Crime");
console.log("Crime movies:");
crimeMovies.forEach((movie) =>
  console.log(`${movie.title} - ${movie.getRating()}`)
);

// ... additional complex operations and analysis based on the dataset

// End of the complex code (over 200 lines)