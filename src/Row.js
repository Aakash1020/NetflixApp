import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";
import requests from "./Request";
import Youtube from "react-youtube";

import movieTrailer from "movie-trailer";
import "react-modal-video/scss/modal-video.scss";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const Request = await axios.get(fetchUrl);
      setMovies(Request.data.results);
      return requests;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      settrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          settrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const onReady = (e) => {
    e.target.pauseVideo();
  };

  return (
    <React.Fragment>
      <div className="row">
        <h2>{title}</h2>
        <div className="row__posters">
          {movies.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <img
                  onClick={() => handleClick(movie)}
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  key={movie.id}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
              )
          )}
        </div>
      </div>

      {trailerUrl && (
        <div className="Modal">
          <Youtube
            className="youtubePlayer"
            videoId={trailerUrl}
            opts={opts}
            onReady={onReady}
          >
            {/* <button onClick={() => settrailerUrl(false)}>Close</button> */}
          </Youtube>
        </div>
      )}
    </React.Fragment>
  );
}

export default Row;
