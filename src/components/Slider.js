import React, { useState, useEffect } from "react";
import tmdb from '../api/tmdb';
import Cards from "./Cards";

const Slider = ({ mediaType, title, path, params = {}, isLarge }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (params.with_genres) {
                try {
                    const response = await tmdb.get(`discover/movie`, { params: { with_genres: params.with_genres } });
                    setItems(response.data.results);
                } catch (error) {
                    console.error("Failed to fetch movies by genre:", error);
                }
            } else {
                try {
                    const response = await tmdb.get(path, { params });
                    setItems(response.data.results);
                } catch (error) {
                    console.error("Failed to fetch data:", error);
                }
            }
        };
        fetchData();
    }, [params, path]);

    return (
        <div className="media-slider">
            <h3 className="media-slider__title">{title}</h3>
            <div className="media-slider__cards">
                {items.map((media) => (
                    <Cards
                        isLarge={isLarge}
                        key={media.id}
                        media={media}
                        mediaType={media.media_type || mediaType}
                    />
                ))}
            </div>
        </div>
    );
}

export default Slider;