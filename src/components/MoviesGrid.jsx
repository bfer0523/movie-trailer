import MovieCard from "./MovieCard";
import styles from '../css/MoviesGrid.module.css';
import { useState } from "react";
import { useEffect } from "react";
import { get } from "../utils/httpClient";
function MoviesGrid(){

    const [movies, setMovies]=useState([]);

    useEffect(()=>{

        get("/discover/movie").then((data)=>{
            setMovies(data.results);
        });

    },[]);

    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>     
                ))}
        </ul>
    );
}
export default MoviesGrid