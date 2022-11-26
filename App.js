import classes from './App.module.css';
import React, { useState, useEffect } from 'react';


import Search from './Search';
import Movies from './Movies';

function App() {

  // useEffect(() => {
    //   fetch('https://www.omdbapi.com/?apikey=45f0782a&s=war')
    //     .then((response) => response.json())
    //     .then((data) => {
      //       // console.log(data.Search);
  //       // setMovies(data);
        
  //     })
  
  // })
  
  const Data = {"Search":[{"Title":"Avengers: Infinity War","Year":"2018","imdbID":"tt4154756","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"},{"Title":"Captain America: Civil War","Year":"2016","imdbID":"tt3498820","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"},{"Title":"World War Z","Year":"2013","imdbID":"tt0816711","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"},{"Title":"War of the Worlds","Year":"2005","imdbID":"tt0407304","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"},{"Title":"Lord of War","Year":"2005","imdbID":"tt0399295","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"},{"Title":"War for the Planet of the Apes","Year":"2017","imdbID":"tt3450958","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDNmYTQzMDEtMmY0MS00OTNjLTk4MjItMDZhMzkzOGI3MzA0XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SX300.jpg"},{"Title":"War Dogs","Year":"2016","imdbID":"tt2005151","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjEyNzQ0NzM4MV5BMl5BanBnXkFtZTgwMDI0ODM2OTE@._V1_SX300.jpg"},{"Title":"The Tomorrow War","Year":"2021","imdbID":"tt9777666","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNTI2YTI0MWEtNGQ4OS00ODIzLWE1MWEtZGJiN2E3ZmM1OWI1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"},{"Title":"This Means War","Year":"2012","imdbID":"tt1596350","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTYyOTQ4MDE2MV5BMl5BanBnXkFtZTcwOTE0MTgwNw@@._V1_SX300.jpg"},{"Title":"War Horse","Year":"2011","imdbID":"tt1568911","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjExNzkxOTYyNl5BMl5BanBnXkFtZTcwODA0MjU4Ng@@._V1_SX300.jpg"}],"totalResults":"5251","Response":"True"};
  const [movies, setMovies] = useState(Data);
  // console.log(movies);

  const [searchResult, setSearchResult] = useState('')
  const result = (val) => {
    setSearchResult(val)
  }
  
  // console.log(movies.Title);
  // console.log(searchResult);
  // movies.map((val) => {

  //   if(searchResult == val.Title) {
  
  //     console.log(movies.Title);
  //   }
    
  // })

  return (
    <div className={classes.App}>
      <Search result={result} moviesData = {movies.Search} />
      <Movies searchResult={searchResult} moviesData = {movies.Search} />
    </div>
  );
}

export default App;
