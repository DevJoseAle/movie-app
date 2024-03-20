import axios from "axios";
import { Movie } from "../interfaces/responseInterface";


export const getRecommendedMovies2023 = async (): Promise<Movie[]| undefined> => {
    const url = `https://www.omdbapi.com/?apikey=46f9e42b&s=sea&y=2023`;
    
    try {
        const response = await axios.get(url);
        return response.data.Search
    } catch (error) {
        console.log('Error al obtener peliculas catch2023:', error);
    }
    
}
export const getRecommendedMovies2024 = async (): Promise<Movie[]| undefined> => {
    const url = `https://www.omdbapi.com/?apikey=46f9e42b&s=house&y=2024`;
    try {
        const response = await axios.get(url);
        const data =  response.data.Search || []
        return data
    } catch (error) {
        console.log('Error al obtener peliculas catch2024:', error);
    }
    
}



