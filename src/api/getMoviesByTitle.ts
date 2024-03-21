import axios from "axios";
import { Movie } from "../interfaces/responseInterface";


export const getMovieByTitle = async(title:string): Promise< Movie[] | string > =>{
    const url = `https://www.omdbapi.com/?apikey=46f9e42b&s=${title}`;
    try {
        const response = await axios.get(url);
        const data =  response.data;
        if(data.Response === 'False') return '';
        return data
    } catch (error) {
        console.log('Error al obtener peliculas GetMovie:', error);
        return ''
    }
}