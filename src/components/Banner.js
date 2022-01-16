import { Button, makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import HeroBanner from "../images/casa.jpg"; 
import resquests from '../Requests';
//Es la pantalla o sesion princiapl
const Banner = () => {
    const classes = useStyles();
    const [ movie, setMovie] = useState([]);
    const truncate = (string, n) =>string?.length > n ? `${string.substring(0, n-1)}...`: string
    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(resquests.fetchNetflixOriginals)
            //tenemos un array de peliculas en request.data.results
            //Geramos un numero ramndon entre 0 y la longitud del array, para obtener un indice aleatorio
            //const ramdon = Math.floor(Math.ramdon() * request.data.results.length - 1)
            const ramdon = Math.floor(Math.random() * request.data.results.length - 1)
            console.log(request); 
            //mostraremos en pantalla el resuqest.data.resuls con el numero aleatorio
            //setMovie(request.data.results[ramdon])
            setMovie(request.data.results[ramdon ]);
           return request;
        }
        fetchData();
    }, [])
    return (
        <div className={classes.root} style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            position: "relative",
            height: "440px",
            objectFit: "contain",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
        }}>
           <div className={classes.content}>
           <Typography variant="h2" component="h1">
           {movie?.title || movie?.name || movie.original_name}
           </Typography>
           <div className={classes.buttons}>
               <Button>Play</Button>
               <Button>My List</Button>
        </div>
       
        <Typography style={{ wordWrap: "break-word" }} variant="h6" className={classes.description} >
            {
                truncate(movie?.overview, 160)
            }
           </Typography>
        </div>
        <div className={classes.fadeBottom}></div>           
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    root: {
      position: "relative",
      height: "440px",
      objectFit: "contain",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff",
    },
    buttons: {
        "& button":{
            cursor: "pointer",
            color: "#fff",
            fontWeight: 700,
            borderRadius: "spx",
            padding: theme.spacing(1, 4, 1, 4),
            backgroundColor: "rgba(51, 51, 51, 0.5)",
        },
        "& button:hover":{
            color: "#000",
            backgroundColor: "#e6e6e6",

        }

    },
    fadeBottom:{
        position: "absolute",
        top: "30vh",
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: "99",
        backgroundImage: "linear-gradient(180deg, rgba(37, 37, 37, 0),  #111)",
        //backgroundImage:
       // "linear-gradient(180deg, transparent, rgba(37, 37, 37, 0, 0.67), #111)",
    },
  }));

export default Banner
