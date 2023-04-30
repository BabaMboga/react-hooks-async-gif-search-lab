import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    fetchGifs("dolphin");
  }, []);

  const fetchGifs = (query) => {
    const apiKey = "2GQpC9OCtSGJ7X2526JFWHOZDsjwkhme";
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g&limit=3`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setGifs(data.data));
  };

  const handleSearch = (query) => {
    fetchGifs(query);
  };

  return (
    <div>
      <GifSearch handleSearch={handleSearch} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
