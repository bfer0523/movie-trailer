 import style from '../css/MovieDetails.module.css'
 import { get } from "../utils/httpClient";
 import { useState } from "react";
import { useEffect } from "react";
 import { useParams} from 'react-router-dom'

function MovieDetails(){
     //let params = useParams();
     
     let {movieId} =useParams();
     
     const [movie, setMovie] = useState(null);

    useEffect(() => {
        get("/movie/" + movieId).then((data) => {
        setMovie(data);
    });
  }, [movieId]);

  if (!movie) {
    return null;
  }

     const imageUrl ="https://image.tmdb.org/t/p/w500"+ movie.poster_path;
    return(
        //<div>Id:{params.movieId}</div>,
        <div className={style.detailscontainer}>
            <img className={`${style.col}  ${style.movieImage}`} src={imageUrl} alt={movie.title}  />
            <div className={`${style.col} ${style.movieDetails}`}>
                <p className={style.firstItem}><strong>Title:</strong>  {movie.title} </p>
                <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(", ")}</p>
                <p><strong>Descripcion:</strong> {movie.overview} </p>
            </div>
        </div>
    );
}
export default MovieDetails