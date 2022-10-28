import React, { useState } from "react";
import axios from "axios";
import "../App.css";

function Recherche() {
  const [FilmChercher, setFilmChercher] = useState("");
  const [FilmResult, setFilmResult] = useState([]);
  const [Picture,setPicture]= useState("");

  function rechercheFilm() {
    getFilm(FilmChercher);
  }
  function onChangeRecherche(e) {
    console.log(e.target.value);
    setFilmChercher(e.target.value);
  }

  async function getFilm(film) {
    const data = {};
    await axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=3c709c6291f4c09e22164924ea9480ac&query=" +
          film +
          "&language=en-US&page=1&include_adult=false",
        JSON.stringify(data)
      )
      .then((result) => {
        setFilmResult(result.data.results);
        
         
      });
  }

  return (
    <div>
      <div>
        
          <label>Recherche film</label>
          <input
            type="texte"
            placeholder="Enter email"
            onChange={(e) => onChangeRecherche(e)}
          />
        
        <button
          onClick={(e) => rechercheFilm(e)}
          variant="primary"
        >
          Recherche
        </button>
      </div>
      <div className="saisie">
        {FilmResult.map((film) => (
          <div className="film">
            <img src="https://image.tmdb.org/t/p/w500${film.poster_path}"></img>
            <h4>{film.original_title}</h4>
            <p>{film.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recherche;
