import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchType,setSearchTerm] = useState('')
  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const handleonSubmit = (e)=>{
    e.preventDefault();
    if(searchType)
    {
      fetch(SEARCH_API+searchType)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
        setSearchTerm("")
    }
  }

  const handleOnChange = (e) =>{
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <header>
        <form onSubmit={handleonSubmit}>
        <input className="search" type="search" placeholder="Search..." value={searchType} onChange={handleOnChange} />

        </form>
        
      </header>
      <div className="movie-container">
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}

export default App;
