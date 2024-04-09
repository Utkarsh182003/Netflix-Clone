import React from 'react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Slider from '../components/Slider';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Slider
                mediaType="tv"
                title="NETFLIX ORIGINALS"
                path="/discover/tv"
                params={{ with_networks: 213 }}
                isLarge
            />
            <Slider
                title="TRENDING NOW"
                path="/trending/all/week"
            />
            <Slider
                mediaType="movie"
                title="TOP RATED"
                path="/movie/top_rated"
            />
            <Slider
                mediaType="movie"
                title="ACTION MOVIES"
                path="/discover/movie"
                params={{ with_genres: 28 }}
                isLarge
            />
            <Slider
                mediaType="movie"
                title="COMEDY MOVIES"
                path="/discover/movie"
                params={{ with_genres: 35 }}
            />
            <Slider
                mediaType="movie"
                title="ADVENTURE MOVIES"
                path="/discover/movie"
                params={{ with_genres: 12 }}
            />
            <Slider
                mediaType="movie"
                title="HORROR MOVIES"
                path="/discover/movie"
                params={{ with_genres: 27 }}
            />
            
            <Footer />


        </div>
    );
}

export default HomePage;
