import React, { Component } from 'react';
import './MovieDetails.css'

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }
    getMovieDetails = () => {
        const personQuery = `https://api.themoviedb.org/3/search/person?api_key=`;
        const langQuery = `&language=en-US&page=1&include_adult=false&query=`;
        const actor = this.props.actor.replace(/\s/g, `%20`);
        const apiKey = process.env.GATSBY_MOVIE_DB_API_KEY;
        fetch(`${personQuery}${apiKey}${langQuery}${actor}`)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    movies: data.results[0].known_for
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    componentDidMount() {
        this.getMovieDetails();
    }
    render() {
        const movieList = this.state.movies.map(movie => {
            return <div
            className="movie-items"
            key={movie.id}>
                <h3>{movie.original_title}</h3>
                <div className="movie-description">
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="movie=poster"/>
                <div style={{margin: '1em'}}>
                <h4>Overview:</h4>
                <p>{movie.overview}</p>
                </div>
                </div>
            </div>
        })
        return (
            <div>
                <ul>
                    {movieList}
                </ul>
            </div>
        );
    }
}

export default MovieDetails;
