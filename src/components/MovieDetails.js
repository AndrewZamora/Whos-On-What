import React, { Component } from 'react';

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
            return <li key={movie.id}>{movie.original_title}</li>
        })
        return (
            <div>
                <ul>
                    <p>has been on these films:</p>
                    {movieList}
                </ul>
            </div>
        );
    }
}

export default MovieDetails;
