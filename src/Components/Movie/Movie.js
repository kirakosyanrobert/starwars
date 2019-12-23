import React from 'react';
import './Movie.scss';

const Movie = ({crawl}) => {
    return (
        <section className="movie__content">
            {
                !crawl
                ?
                    <div className="movie__content_image">
                         <img src="./images/star-wars.png" alt="Star Wars Logo" />
                    </div>
                :
                    <p>{crawl}</p>
            }
           
        </section>
    )
}

export default Movie;