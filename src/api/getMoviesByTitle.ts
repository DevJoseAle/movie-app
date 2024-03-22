import axios from "axios";
import { Movie } from "../interfaces/responseInterface";


export const getMovieByTitle = async(title:string): Promise< Movie[] | string > =>{
    const url = `https://www.omdbapi.com/?apikey=46f9e42b&s=${title}`;
    try {
        const response = await axios.get(url);
        const data =  response.data.Search || [];

        if(data.Response === 'False') return 'No hay Peliculas asociadas a esa Búsqueda';
        const filterDate = data.filter((movie: Movie) => movie.Poster !=="N/A")
        return filterDate
    } catch (error) {
        console.log('Error al obtener peliculas GetMovie:', error);
        return ''
    }
}