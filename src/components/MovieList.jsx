import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPopularMovies, incrementPage, decrementPage } from '../features/moviesSlice';
import { Card, CardContent, CardMedia, Typography, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LoadingComponent from './LoadingComponent';
import ErrorComponent from './ErrorComponent';

const MovieList = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.popular);
    const status = useSelector((state) => state.movies.status);
    const currentPage = useSelector((state) => state.movies.currentPage);
    const totalPages = useSelector((state) => state.movies.totalPages);

    useEffect(() => {
        dispatch(fetchPopularMovies(currentPage));
    }, [currentPage, dispatch]);

    const handleNextPage = () => {
        dispatch(incrementPage());
    };

    const handlePrevPage = () => {
        dispatch(decrementPage());
    };

    if (status === 'loading') return <LoadingComponent/>;
    if (status === 'failed') return <ErrorComponent/>;

    return (
        <div>
            <Grid container spacing={3}>
                {movies.slice(0, 9).map((movie) => (  
                    <Grid item key={movie.id} xs={12} sm={6} md={4}>
                        <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    alt={movie.title}
                                    height="140"
                                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {movie.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {movie.overview.slice(0, 100)}...
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                <Button variant="outlined" disabled={currentPage === 1} onClick={handlePrevPage}>
                    Previous
                </Button>
                <Typography variant="subtitle1" style={{ margin: '0 15px', lineHeight: '36px' }}>
                    Page {currentPage} of {totalPages}
                </Typography>
                <Button variant="outlined" disabled={currentPage === totalPages} onClick={handleNextPage}>
                    Next
                </Button>
            </div>
        </div>
    );
};

export default MovieList;
