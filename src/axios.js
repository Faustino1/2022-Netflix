//Nos permite hacer las llamadas de las api de una manera mas sencilla
import axios from "axios";


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

export default instance