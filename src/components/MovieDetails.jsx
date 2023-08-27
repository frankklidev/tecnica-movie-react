import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieDetails } from '../features/moviesSlice';
import { Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core';

const MovieDetails = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector((state) => state.movies.currentMovie);

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchMovieDetails(movieId)); 
    }, [dispatch, movieId]);

    if (!movie) return <div>Cargando...</div>;

    return (
        <div>
            
            <Card>
                <CardMedia
                    component="img"
                    alt={movie.title}
                    height="500"
                    width="500"
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {movie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {movie.overview}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {`Fecha de lanzamiento: ${movie.release_date}`}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {`Puntuación: ${movie.vote_average} / 10`}
                    </Typography>
                </CardContent>
            </Card>
            <Button 
                variant="contained" 
                color="primary" 
                style={{ marginBottom: '20px' }} 
                onClick={() => navigate(-1)} 
            >
                Atrás
            </Button>
        </div>
    );
};

export default MovieDetails;
