const API_KEY = "28aa1748cecd9bc472e00813abce59c0";
const BASE_URI = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URI}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const SerachpopularMovies = async (query) => {
  const response = await fetch(`${BASE_URI}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.results;
};
