import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  const fetchGifs = (query) => {
    const apiKey = 'ZYxtswNG895ATA0fregdhdjf542iPDDf';
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=3`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const newGifs = data.data.map((gif) => ({
          id: gif.id,
          url: gif.images.original.url,
        }));

        setGifs(newGifs);
      })
      .catch((error) => console.error('Error fetching gifs:', error));
  };

  const handleSearchSubmit = (query) => {
    fetchGifs(query);
  };

  useEffect(() => {
    // Initial data fetch when the component loads
    fetchGifs('initial query');
  }, []);

  return (
    <div>
      <GifSearch onSearch={handleSearchSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
