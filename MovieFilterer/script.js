const movies = [
  { title: "Inception", rating: 8.8, genre: "Sci-Fi" },
  { title: "The Dark Knight", rating: 9.0, genre: "Action" },
  { title: "Interstellar", rating: 8.6, genre: "Sci-Fi" },
  { title: "Pulp Fiction", rating: 8.9, genre: "Crime" },
  { title: "The Shawshank Redemption", rating: 9.3, genre: "Drama" },
];

const genreFilter = document.getElementById("genreFilter");
const averageRating = document.getElementById("averageRating");
const movieList = document.getElementById("movieList");

const displayMovies = (genre) => {
  // Filter movies by genre
  const filteredMovies = genre === "All" ? movies : movies.filter(movie => movie.genre === genre);

  // Map movies to HTML list items
  const movieItems = filteredMovies.map(movie => `<li>${movie.title} - Rating: ${movie.rating} (${movie.genre})</li>`).join("");

  // Update movie list in DOM
  movieList.innerHTML = filteredMovies.length > 0 ? movieItems : "<li>No movies found</li>";

  // Calculate average rating
  const totalRating = filteredMovies.reduce((sum, movie) => sum + Number(movie.rating), 0);
  averageRating.textContent = filteredMovies.length > 0 ? `Average Rating: ${(totalRating / filteredMovies.length).toFixed(1)}` : "Average Rating: 0";
};

// Event listener for genre filter change
genreFilter.addEventListener("change", (event) => {
  console.log(`Selected genre: ${event.target.value}`);
  displayMovies(event.target.value)});

// Initial render
displayMovies("All");