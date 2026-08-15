const api_key = "7c1e01713a32197a38664b2e685fb241";
const base_url = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${base_url}/movie/popular?api_key=${api_key}`);
    const data = await response.json()
    return data.results        
}



export const searchMovies = async (query) => {
    const response = await fetch(`${base_url}/search/movie?api_key=${api_key}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results        
}