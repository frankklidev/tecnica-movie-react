import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <Container>
              <Navbar/>
                <Routes>
                    <Route path="/movie/:movieId" element={<MovieDetails />} />
                    <Route path="/" element={<MovieList />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
