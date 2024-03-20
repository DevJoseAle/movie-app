import axios from "axios";
import { Movie } from "../interfaces/responseInterface";

export const getMovie = async (id:string): Promise<Movie| undefined> => {
    const url = `https://www.omdbapi.com/?apikey=46f9e42b&i=${id}`;
    try {
        const response = await axios.get(url);
        const data =  response.data;
        return data
    } catch (error) {
        console.log('Error al obtener peliculas GetMovie:', error);
    }
    
}