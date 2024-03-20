import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { getMovie } from "../api/getMovie";
import { Movie } from "../interfaces/responseInterface";

export const useMovieDetails =(movieId: string)=>{
    

    const [movie, setMovie] = useState<Movie>();
    const [loading, setLoading] = useState(true);
    const getMovieDetails = async (movieId: string) =>{
        try {
            setLoading(true)
            const movieResponse = await getMovie(movieId)
            setMovie(movieResponse);
            setLoading(false);
        } catch (error) {
            console.log('Error al obtener detalles de la pelicula:', error);
        }

        
    } 
    useEffect(() => { getMovieDetails(movieId)}, [])

    return{
        movie,
        loading,
        
    }
}