import { makeStyles } from '@material-ui/core';
import React from 'react'
import Banner from '../components/Banner';
import Header from '../components/Header';
import Row from "../components/Row";
import resquests from '../Requests';
const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Header/>
            <Banner/>
            <Row 
                title="ORIGINALES DE NETFLIX"
                fetchUrl={resquests.fetchNetflixOriginals}
                isLargeRow
             />
            <Row title="LOS MÁS VALORADOS" fetchUrl={resquests.fetchTopRated}/>
            <Row title="PELÍCULAS DE ACCIÓN" fetchUrl={resquests.fetchActionMovies}/>
            <Row title="PELÍCULAS DE COMEDIA" fetchUrl={resquests.fetchComedyMovies}/>
            <Row title="PELÍCULAS DE TERROR" fetchUrl={resquests.fetchHorrorMovies}/>
            <Row title="PELICULAS ROMANTICAS" fetchUrl={resquests.fetchRomanceMovies}/>
            <Row title="DOCUMENTALES" fetchUrl={resquests.fetchDocumentaries}/>          
        </div>
        )
}
const useStyles = makeStyles((theme) => ({
    root: {
      
    },
  }));

export default Home
