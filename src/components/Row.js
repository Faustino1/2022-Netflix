import { makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import resquests from '../Requests';


const Row = ({title, fetchUrl, isLargeRow}) => {
    const classes = useStyles();
    const [ movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";
//const PRUEBA_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2a94c4080df859cf819b8351e6dee8ee&query="
//const FEATURED_API ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&page=1";     

useEffect(()=>{ 
        const fetchData = async () => {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        };
        fetchData();
    }, [fetchUrl])

    
    return (
        <div className={classes.root}>
             <Typography variant="h4">{title}</Typography>
             <div className={classes.posters}>
                 {
                     movies.map((movie)=>
                        ((isLargeRow && movie.posters_path) ||
                        (!isLargeRow && movie.backdrop_path)) && (
                            <img
                            className={`${classes.poster} ${
                                isLargeRow && classes.posterLarge
                            }`}
                            key={movie.id}
                            src={`${base_url}${
                                isLargeRow ? movie.poster_path : movie?.backdrop_path
                            }`}
                            alt={movie?.name}
                            />
                        )
                     )
                 }
             </div>
          
        
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    root: {
      color: "#fff",
      marginLeft: theme.spacing(4),
    },
    posters: {
        maxHeight: "12rem",
        display: "flex",
        overflowY: "hidden",
        overflowX: "scroll",
        "&::-webkit-scrollbar": {
            display: "none",
        },
    },
    poster:{
        maxHeight: "12rem",
        objectFit: "contain",
        marginRight: theme.spacing(1),
        transition: "transform 450ms",
        "&:hover":{
            transform: "scale(1.1)",
        }
    },
    posterLarge:{
        maxHeight: "12rem",
        "&:hover": {
            transform: "scale(1.15)",
        },
    },
  }));

export default Row
