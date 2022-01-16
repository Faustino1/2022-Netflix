
//https://developers.themoviedb.org/3/movies/get-movie-details
//Mia
const API_KEY = "2a94c4080df859cf819b8351e6dee8ee";
//const API_KEY = "67d7a51db285feb1d2606724117d03c9";

//Endopoits
//Cada enpoits es un genero

/*const resquests ={
    fetchTrending: `trending/all/week?api_key=${API_KEY}&language=-US`,
    fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,    
    fetchTopRated: `/movie/top-rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};*/
const resquests ={
    fetchTrending: `https://api.themoviedb.org/3/discover/movie?trending/all/week&api_key=${API_KEY}&language=-US`,
    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,    
    fetchTopRated: `https://api.themoviedb.org/3/discover/movie?top-rated&api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
//SOLUCIÓN
/*const resquests ={
    fetchTrending: "https://api.themoviedb.org/3/discover/movie?trending/all/week&api_key=2a94c4080df859cf819b8351e6dee8ee&language=-US",
    fetchNetflixOriginals: "https://api.themoviedb.org/3/discover/tv?api_key=2a94c4080df859cf819b8351e6dee8ee&with_networks=213",    
    fetchTopRated: "https://api.themoviedb.org/3/discover/movie?top-rated&api_key=2a94c4080df859cf819b8351e6dee8ee&language=en-US",
    fetchActionMovies:"https://api.themoviedb.org/3/discover/movie?api_key=2a94c4080df859cf819b8351e6dee8ee&with_genres=28",
    fetchComedyMovies: "https://api.themoviedb.org/3/discover/movie?api_key=2a94c4080df859cf819b8351e6dee8ee&with_genres=35",
    fetchHorrorMovies: "https://api.themoviedb.org/3/discover/movie?api_key=2a94c4080df859cf819b8351e6dee8ee&with_genres=27",
    fetchRomanceMovies: "https://api.themoviedb.org/3/discover/movie?api_key=2a94c4080df859cf819b8351e6dee8ee&with_genres=10749",
    fetchDocumentaries: "https://api.themoviedb.org/3/discover/movie?api_key=2a94c4080df859cf819b8351e6dee8ee&with_genres=99",
};*/

export default resquests; 
