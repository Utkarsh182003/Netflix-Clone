import React, { useState, useEffect } from 'react';
import { generateImageUrl, ImageSizes } from '../utils/tmdb';
import tmdbApi from '../api/tmdb';

const Banner = () => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const fetchBannerMovie = async () => {
           
            try {
              const response = await tmdbApi.get("/discover/tv", { with_networks: 213 });
              if (response.status === 200) {

                  if (response.data && response.data.results && response.data.results.length > 0) {
                      setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)]);
                  } else {
                      console.error("No results found for banner movie.");
                  }
              } else {
                  console.error("API request failed with status code:", response.status);
              }
          } catch (error) {
              console.error("Failed to fetch banner movie:", error);
          }
        };
        fetchBannerMovie();
    }, []);

    return (
        <div
            className="banner"
            style={{
                backgroundImage: `url(${generateImageUrl(movie?.backdrop_path || '', ImageSizes.backdrop)})`,
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name || "No Title Available"}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {movie?.overview || "No Description Available"}
                </h1>
            </div>
            <div className="banner__cover" />
        </div>
    );
};

export default Banner;