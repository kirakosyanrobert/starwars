import React from 'react';
import './Movie.scss';
import { Jumbotron, Container } from 'react-bootstrap';

const Movie = ({crawl}) => {
    return (
        <section className="movie__content">
            {
                !crawl
                ?
                    <h1>Gagas</h1>
                :
                    <p>{crawl}</p>
            }
           
        </section>
    )
}

export default Movie;